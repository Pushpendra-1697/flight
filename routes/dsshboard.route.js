const { Router } = require('express');
const BookFlightModel = require('../models/Booking.model');
const DashboardRouter = Router();

DashboardRouter.get('/dashboard', async (req, res) => {
    let query = req.query;
    try {
        let bookFlights = await BookFlightModel.find(query);
        res.status(200).send(bookFlights);
    } catch (err) {
        console.log(err);
        res.status(404).send({ Error: err });
    }
});

module.exports = { DashboardRouter };