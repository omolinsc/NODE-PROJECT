const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const db = require("./src/utils/db/db");
db.connectDb();

// All Routes imports
const petsRoutes = require("./src/api/pets/pet.routes");
const ownersRoutes = require("./src/api/owners/owner.routes");

const PORT = process.env.PORT || 3100;

server = express();

const router = express.Router();

server.use("/", router);
server.use(express.json());

server.use("/pets", petsRoutes);
server.use("/owners", ownersRoutes);

router.get("/", (req, res) => {
    return res.status(200).json("[SERVER WORKING PROPERLY]");
});








server.listen(PORT, () => {
    console.log("[SERVER RUNNING]: on http://localhost:"+PORT);
});