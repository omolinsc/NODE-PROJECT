const bcrypt = require("bcrypt");
const User = require("../../api/users/user.model");
const {isValidEmail, isValidPassword} = require("./validations");

const LocalStrategy = require("passport-local").Strategy;

const loginStrategy = new LocalStrategy(
    {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true,
    },
    async (req, email, password, done) => {
        try{
            if (!isValidEmail(email) || !isValidPassword(password)){
                const error = new Error("[LOGIN ERROR] Email o contraseña en formato erroneo");
                return done(error, null);
            };

            const userDB = await User.findOne({email});
            const isValidUserPassword = await bcrypt.compare(password, userDB.password);

            if(!isValidUserPassword){
                const error = new Error("[LOGIN ERROR] Las contraseñas no coinciden");
                error.status = 400;
                return done(error);
            };

            const userWithoutPassword = userDB.toObject();
            Reflect.deleteProperty(userWithoutPassword, "password");

            return done(error, null);

        } catch(error) {
            return done(error, null);
        }
    }
);

module.exports = {
    loginStrategy,
};