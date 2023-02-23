const { Router } = require('express');
const FlightRouter = Router();
const FlightModel = require('../models/Flight.model');


FlightRouter.get('/', async (req, res) => {
    let query = req.query;
    try {
        const flights = await FlightModel.find(query);
        res.status(200).send(flights);
    } catch (err) {
        console.log(err);
        res.status(404).send({ Error: err });
    }
});

FlightRouter.get('/:id', async (req, res) => {
    const { id } = req.params;
    // console.log(id);
    try {
        const flight = await FlightModel.find({ _id: id });
        res.status(200).send({ msg: `Flight which id is ${id}`, flight });
    } catch (err) {
        console.log(err);
        res.status(404).send({ Error: err });
    }
});

FlightRouter.post('/', async (req, res) => {
    let payload = req.body;
    try {
        const flight = new FlightModel(payload);
        await flight.save();
        res.status(201).send({ msg: "Successfully added Flight" });
    } catch (err) {
        console.log(err);
        res.status(404).send({ Error: err });
    }
});

FlightRouter.patch('/:id', async (req, res) => {
    let { id } = req.params;
    let payload = req.body;
    try {
        await FlightModel.findByIdAndUpdate({ _id: id }, payload);
        res.status(200).send({ msg: `Flight details updated whose id is ${id}` });
    } catch (err) {
        console.log(err);
        res.status(404).send({ Error: err });
    }
});

FlightRouter.delete('/:id', async (req, res) => {
    let { id } = req.params;
    try {
        await FlightModel.findByIdAndDelete({ _id: id });
        res.status(202).send({ msg: `Flight details deleted whose id is ${id}` })
    } catch (err) {
        console.log(err);
        res.status(404).send({ Error: err });
    }
});


module.exports = { FlightRouter };