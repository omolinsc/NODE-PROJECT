const mongoose = require("mongoose");

const petSchema = new mongoose.Schema(

    {
        name: {
            type: String,
            required: [true, "Debes introducir un nombre a tu mascota"],
        },
        family: {
            type: String,
            required: [true, "Debes introducir el tipo de tu mascota"],
        },
        race: {
            type: String,
        },
        weight: {
            type: Number,
        },
        colour: {
            type: String,
        },
        description: {
            type: String,
        },
        birthDate: {
            type: Date,
        },
        deathDate: {
            type: Date,
        },
        owner: {
            type: mongoose.Types.ObjectId,
            ref: "owners",
            required: [true, "Es necesario marcar un propietario"],
        },
        vaccines: {
            type: String,
        },
    },
    {
        timestamps: true,
    }

);

const Pet = mongoose.model("pets", petSchema);

module.exports = Pet;