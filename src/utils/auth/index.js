const passport = require("passport");
const User = require("../../api/users/user.model");
const loginStrategy = require("./loginStrategy");
const registerStrategy = require("./registerStrategy");

// recoge la ID del usuario y actualiza la sesión
passport.serializeUser((user,done) => {
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

const activarAutenticacion = () => {
    passport.use("registro", registerStrategy);
    passport.use("login", loginStrategy);
};

module.exports = {
    activarAutenticacion,
};