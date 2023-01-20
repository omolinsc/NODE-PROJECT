const User = require("../../api/users/user.model");
const bcrypt = require("bcrypt");
const {isValidEmail, isValidPassword} = require("../validations");

const LocalStrategy = require("passport-local").Strategy;

const registerStrategy = new LocalStrategy(
    {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true,
    },
    async (req, email, password, done) => {
        try {
            
        } catch(error) {
            return done(error);
        }
    }
);