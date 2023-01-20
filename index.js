const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
const passport = require("passport");

const auth = require("./src/utils/auth/index");
auth.activarAutentication();

const db = require("./src/utils/db/db");
db.connectDb();

// All Routes imports
const petsRoutes = require("./src/api/pets/pet.routes");
const ownersRoutes = require("./src/api/owners/owner.routes");
const centersRoutes = require("./src/api/centers/center.routes");
const usersRoutes = require("./src/api/users/user.routes");

const PORT = process.env.PORT || 3100;

server = express();

const router = express.Router();

server.use("/", router);
server.use(express.json());

server.use("/pets", petsRoutes);
server.use("/owners", ownersRoutes);
server.use("/centers", centersRoutes);
server.use("/users", usersRoutes);

router.get("/", (req, res) => {
    return res.status(200).json("[SERVER WORKING PROPERLY]");
});








server.listen(PORT, () => {
    console.log("[SERVER RUNNING]: on http://localhost:"+PORT);
});