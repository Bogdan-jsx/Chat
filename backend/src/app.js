const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer);
const controllers = require("./controllers/index");
const User = require("./db/models/user").UserModel;
const messagesRepository = require("./db/repositories/messagesRepository");
const app = express();

mongoose.connect("mongodb://localhost:27017/chat", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

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
  socket.on("message", (data) => {
    await messagesRepository.addMessage({ message: data.message, author: data.author });
    io.emit("message", data);
  })
})

app.listen(3000);