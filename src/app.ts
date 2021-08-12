import express from "express";
import mongoose, { Callback } from "mongoose";
import passport from "passport";
import LocalStrategy from "passport-local";
import session from "express-session";
import controllers from "./controllers";
import { UserModel } from "./db/models/user";
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
        UserModel.findOne({ email: username }, function (err, user) {
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
    UserModel.findById(id, function (err, user) {
      return err ? done(err) : done(null, user);
    });
});

controllers(app);

app.listen(3000);