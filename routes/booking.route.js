const { Router } = require('express');
const BookFlightModel = require('../models/Booking.model');
const FlightModel = require('../models/Flight.model');
const RegisterModel = require('../models/Register.model');
const BookRouter = Router();

BookRouter.post('/booking', async (req, res) => {
    const { userId, flightId } = req.query;
    try {
        const flight = await FlightModel.find({ _id: flightId });
        const user = await RegisterModel.find({ _id: userId });
        const book = BookFlightModel({ user, flight });
        await book.save();
        res.status(201).send({ msg: `Succefully book flight of an user whose userId is ${userId}` });
    } catch (err) {
        console.log(err);
        res.status(404).send({ Error: err });
    }
});

module.exports = { BookRouter };