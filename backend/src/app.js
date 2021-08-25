const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const session = require("express-session");
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer);
const bodyParser = require("body-parser");
const cors = require("cors");
const controllers = require("./controllers/index");
const User = require("./db/models/user").model;
const messagesRepository = require("./db/repositories/messagesRepository");

app.use(cors());

mongoose.connect("mongodb://localhost:27017/chat", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({ secret: "SECRET" }))

app.use(passport.initialize());
app.use(passport.session());

passport.use(
    new LocalStrategy(
      { usernameField: "email", passwordField: "password" },
      function (username, password, done) {
        User.findOne({ email: username }, function (err, user) {
          return err
            ? done(err)
            : user
            ? password === user.password
              ? done(null, user)
              : done(null, false, { message: "Incorrect Password" })
            : done(null, false, { message: "Incorrect Ussername" });
        });
      }
    )
);
  
passport.serializeUser(function (user, done) {
    done(null, user.id);
});
passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      return err ? done(err) : done(null, user);
    });
});

controllers(app);

io.on("connection", (socket) => {
  console.log("Connected");
  socket.on("message", (data) => {
    console.log(data);
    messagesRepository.addMessage({ message: data.message, authorName: data.authorName, authorAvatar: data.authorAvatar, sendTime: data.sendTime });
    io.emit("message", data);
  })
})

httpServer.listen(3000);