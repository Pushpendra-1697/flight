const { Schema, model } = require("mongoose");
const FlightModel = require("./Flight.model");
const RegisterModel = require("./Register.model");

const bookSchema = new Schema({
    user: { type: Object, ref: RegisterModel },
    flight: { type: Object, ref: FlightModel }
}, {
    versionKey: false
});

const BookFlightModel = model('bookflight', bookSchema);
module.exports = BookFlightModel;

