const { Schema, model } = require("mongoose");

const registerSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, {
    versionKey: false
});

const RegisterModel = model('register', registerSchema);
module.exports = RegisterModel;

