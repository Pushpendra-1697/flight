const { Router } = require('express');
const RegisterRoutes = Router();
const RegisterModel = require('../models/Register.model');
const bcrypt = require('bcrypt');

RegisterRoutes.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        bcrypt.hash(password, 5, async (err, sequre_password) => {
            if (err) {
                console.log(err);
            } else {
                const user = new RegisterModel({ name, email, password: sequre_password });
                await user.save();
                res.status(201).send({ msg: 'registered Succefully' });
            }
        })
    } catch (err) {
        console.log(err);
        res.status(404).send({ msg: 'failed to register' })
    }
});

module.exports = RegisterRoutes;