const mongoose = require("mongoose");
require("dotenv").config();

const db_url = process.env.DB_URL;
console.log(db_url);

const connectDb = async () => {
    try {
        mongoose.set("strictQuery", true);
        const db = await mongoose.connect(process.env.DB_URL);
        const { name, host, port } = db.connection;
        console.log(`[DATABASE] Conected to: ${name} // in host: ${host} // at port: ${port}`);
    } catch(error) {
        console.log(`[DATABASE] Error connecting DDBB`, error);
    }
};

module.exports = {
    connectDb,
};