const express = require("express");

//! const {isAuth} = require("../../utils/   auth   ");

const controller = require("./user.controller");

const router = express.Router();

router.post("/register", controller.registerPost);
router.post("/login", controller.loginPost);
router.post("/logout", controller.logoutPost);
router.post("/checksession", controller.checksessionGet);

module.exports = router;