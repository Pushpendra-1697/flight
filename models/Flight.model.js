const { Schema, model } = require("mongoose");

const flightSchema = new Schema({
    airline: String,
    flightNo: String,
    departure: String,
    arrival: String,
    departureTime: Date,
    arrivalTime: Date,
    seats: Number,
    price: Number
}, {
    versionKey: false
});

const FlightModel = model('flightcollection', flightSchema);
module.exports = FlightModel;

