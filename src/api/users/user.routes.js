const express = require("express");
const { isAuth } = require("../../utils/auth/middlewares/authMiddlewares");
const controller = require("./user.controller");

const router = express.Router();

router.get("/index", controller.indexGet);
router.post("/register", controller.registerPost);
router.post("/login", controller.loginPost);
router.post("/logout", controller.logoutPost);
router.get("/checksession", controller.checksessionGet);

module.exports = router;
