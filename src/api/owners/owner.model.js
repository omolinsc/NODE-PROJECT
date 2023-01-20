const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema(

    {
        name: {
            type: String,
            required: [true, "Debes introducir un nombre"],
        },
        dni: {
            type: String,
            required: [true, "Debes introducir el DNI"],
        },
        birthDate: {
            type: Date,
        },
        postal: {
            type: String,
        },
        email: {
            type: String,
            required: [true, "Introduce al menos un email válido"],
            unique: true,
        },
        phone: {
            type: Number,
        },
        center: {
            type: mongoose.Types.ObjectId,
            ref: "centers",
        }
    },
    {
        timestamps: true,
    }

);

const Owner = mongoose.model("owners", ownerSchema);

module.exports = Owner;