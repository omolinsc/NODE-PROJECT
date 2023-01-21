const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        password: {
            type: String,
            required: [true, "Es necesario introducir una contraseña"],
        },
        email: {
            type: String,
            required: [true, "Es necesario introducir un eMail"],
            unique: true,
        },
        role: {
            type: String,
            default: 'user',
            enum: ['user', 'admin', 'center'],
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("users", userSchema);

module.exports = {
    User,
};