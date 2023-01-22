const passport = require("passport");
const User = require("./user.model");

const indexGet = async (req, res, next) => {
    try {
        const users = await User.find();
        return res.status(200).json(users);
    } catch(error) {
        return next(error);
    }
};

const registerPost = (req, res, next) => {
    try {
        const done = (error, user) => {
            req.logIn(user, (error) => {
                if (error) return next(error);

                return res.status(201).json(user);
            });
        };

        passport.authenticate("register", done)(req);
    } catch (error) {
        return next(error);
    }
};

const loginPost = (req, res, next) => {
    try {
        const done = (error, user) => {
            if (error) return next(error);
            req.logIn(user, (error) => {
                if (error) return next(error);

                return res.status(201).json(user);
            });
        };

        passport.authenticate("login", done)(req);
    } catch (error) {
        return next(error);
    }
};

const logoutPost = async (req, res, next) => {
    try {
        const logoutUser = (error) => {
            if (error) return next(error);

            req.session.destroy(() => {
                res.clearCookie("connect.sid");
                return res.status(200).json("[LOGOUT] - Cerraste la sesión.");
            });
        };

        await req.logout(logoutUser);
    } catch (error) {
        return next(error);
    }
};

const checksessionGet = (req, res, next) => {
    try {
        if(!req.user) {
            return res.status(200).json(null);
        }
        const userWithoutPass = req.user.toObject();
        Reflect.deleteProperty(userWithoutPass, 'password');
        return res.status(200).json(userWithoutPass);
    } catch (error) {
        return next(error);
    }
};

module.exports = {
    indexGet,
    registerPost,
    loginPost,
    logoutPost,
    checksessionGet,
};
