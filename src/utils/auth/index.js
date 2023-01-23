const passport = require("passport");
const User = require("../../api/users/user.model");
const loginStrategy = require("./loginStrategy");
const registerStrategy = require("./registerStrategy");


passport.serializeUser((user,done) => {
    console.log(user)
    done(null, user._id);
});

passport.deserializeUser(async(id, done) => {
    try {
        const userDB = await User.findById(id);
        return done(null, userDB);
    } catch(error) {
        return done(error);
    }
})

const runAuth = () => {
    passport.use("register", registerStrategy);
    passport.use("login", loginStrategy);
};

module.exports = {
    runAuth,
};