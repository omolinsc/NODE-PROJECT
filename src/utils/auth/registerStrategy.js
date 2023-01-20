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
            const userDB = await User.findOne({email: email.toLowerCase()});
            if (userDB) {
                const error = new Error("[REGISTER] User already exists");
                return done(error, null);
            }
            if (!isValidEmail(email)) {
                const error = new Error("[REGISTER] Invalid email");
                return done(error, null);
            }
            if (!isValidPassword(password)) {
                const error = new Error("[REGISTER] Password do not fit the rules (8 characters , 1 upperLetter, 1 number)");
                return done(error, null);
            }

            const saltRounds = 10;
            const encryptedPassword = await bcrypt.hash(password, saltRounds);

            const userToBeCreated = new User({
                ...req.body,
                email,
                password: encryptedPassword,
            });

            const created = await userToBeCreated.save();
            return done(null, created);
        } catch(error) {
            return done(error);
        }
    }
);

module.exports = registerStrategy;