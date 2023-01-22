const mongoose = require("mongoose");

const DB_URL = process.env.DB_URL;

const connectDB = async () => {
    try {
        mongoose.set("strictQuery", true);
        const db = await mongoose.connect(process.env.DB_URL);
        const { name, host, port } = db.connection;
        console.log(`[DATABASE] Conected to: ${name} // in host: ${host} // at port: ${port}`);
    } 
    catch(error) {
        console.log(`[DATABASE] Error connecting DDBB`, error);
    }
};

module.exports = {
    connectDB,
    DB_URL,
};