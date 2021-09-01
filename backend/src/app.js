const dotenv = require("dotenv");
dotenv.config();

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

mongoose.connect(process.env.DB_URI, {
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
  socket.on("message", async (data) => {
    const message = await messagesRepository.addMessage({ message: data.message, author: data.authorId, sendTime: data.sendTime });
    io.emit("message", message);
  })
})

httpServer.listen(process.env.PORT);