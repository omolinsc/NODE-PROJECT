const isAuth = (req, res, next) => {
    if (!req.user) {
        const error = new Error ("[AUTHENTICATE ERROR] You need to LogIn to access");
        error.status = 401;
        return next(error);
    }
    return next();
};

// Middleware para saber si somos admins o no
// 1 . Puede haber usuario o no
// 2 . Si hay usuario tiene que ser Admin

const isAdmin = (req, res, next) => {
    if(!req.user){
        const error = new Error("[AUTHENTICATE ERROR] You need to LogIn to access");
        error.status = 401;
        return next(error);
    }

    if(req.user.role !== "admin"){
        const error = new Error("[AUTHENTICATE ERROR] You need Admin Role");
        error.status = 403;
        return next(error);
    }

    return next();
};

const hasRole = (roles) => (req, res, next) => {
    if(!req.user){
        const error = new Error("[AUTHENTICATE ERROR] You need to LogIn to access");
        error.status = 401;
        return next(error);
    }
    if(req.user.role !== "admin"){
        const error = new Error("[AUTHENTICATE ERROR] You need Admin Role");
        error.status = 403;
        return next(error);
    }

    return next();
};

module.exports = {
    isAuth,
    isAdmin,
    hasRole,
};