const mongoose = require("mongoose");

const centerSchema = new mongoose.Schema(

    {
        name: {
            type: String,
            required: [true, "Debes introducir un nombre para en centro"],
            unique: true,
        },
        type: {
            type: String,
            required: [true, "Debes introducir el tipo de centro"],
            enum: ["centro veterinario", "protectora de animales"]
        },
        email: {
            type: String,
            required: [true, "Introduce al menos un email válido"],
            unique: true,
        },
        phone: {
            type: Number,
        },
        postal: {
            type: String,
        },
        location: {
            type: String,
        },
    },
    {
        timestamps: true,
    }

);

const Center = mongoose.model("centers", centerSchema);

module.exports = Center;