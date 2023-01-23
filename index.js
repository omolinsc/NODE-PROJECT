const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const passport = require("passport");

const auth = require("./src/utils/auth/index");
auth.runAuth();
const {isAuth} = require("./src/utils/auth/middlewares/authMiddlewares");

const db = require("./src/utils/db/db");
db.connectDB();


// All Routes imports
const petsRoutes = require("./src/api/pets/pet.routes");
const ownersRoutes = require("./src/api/owners/owner.routes");
const centersRoutes = require("./src/api/centers/center.routes");
const usersRoutes = require("./src/api/users/user.routes");

const PORT = process.env.PORT || 3100;

server = express();

const router = express.Router();

// se utiliza para admitir peticiones desde otro servidor, front o app
server.use(cors());

// EXPRESS-SESSION : para controlar las sesiones de usuarios activos
server.use(
    session({
        secret: process.env.SESSION_SECRET, // Frase aleatoria y inventada, tiene que ser larga y difícil
        saveUninitialized: true,
        resave: false,
        cookie: {maxAge: 1 * 60 * 1000}, // tiempo de vida de las cookies (en ms)
        store: MongoStore.create({mongoUrl: db.DB_URL}),
    })
);

// convierte a json cuando enviamos un post al servidor
server.use(express.json());

// convierte cuando mandamos un form o formData al servidor
server.use(express.urlencoded({extended:true}));


// Autentificación
server.use(passport.initialize());
server.use(passport.session());

server.use("/pets", petsRoutes);
server.use("/owners", ownersRoutes);
server.use("/centers", centersRoutes);
server.use("/users", usersRoutes);
server.use("/", router);

// para revisar si entramos una ruta errónea
server.use("*", (req, res, next) => {
    return res.status(404).json("[ERROR] No se encuentra la URL");
})

// control de errores
server.use((error, req, res, next) => {
    console.log(error)
    const status = error.status || 500;
    const message = error.message || "[ERROR] Unexpected Error";
    return res.status(status).json(message);
})

router.get("/", (req, res) => {
    return res.status(200).json("[SERVER WORKING PROPERLY]");
});








server.listen(PORT, () => {
    console.log("[SERVER RUNNING]: on http://localhost:"+PORT);
});