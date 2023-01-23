const express = require("express");
const controller = require("./pet.controller");

const router = express.Router();

router.get("/", controller.indexGet);
router.get("/:id", controller.getById);
router.get("/getname/:name", controller.getByName);
router.get("/getowner/:owner", controller.getByOwner);
// router.get("/get/:center", controller.getByCenter);
router.post("/create", controller.createPost);
router.put("/edit/:id", controller.editPut);
router.delete("/delete/:id", controller.deletePet);

module.exports = router;