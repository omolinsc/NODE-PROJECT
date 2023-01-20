const passport = require("passport");
const registerStrategy = require("./registerStrategy");

const activarAutentication = () => {
    passport.use("registro", registerStrategy);
};

module.exports = {
    activarAutentication,
};