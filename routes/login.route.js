const express = require('express');
const LoginRoutes = express.Router();
const jwt = require('jsonwebtoken');
const RegisterModel = require('../models/Register.model');
const bcrypt = require('bcrypt');


LoginRoutes.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await RegisterModel.find({ email });
        if (user.length > 0) {
            bcrypt.compare(password, user[0]['password'], (err, result) => {
                if (result) {
                    const token = jwt.sign({ course: 'backend' }, 'masai', { expiresIn: '3h' });
                    res.send({ msg: "Login Successful", token });
                } else {
                    res.send({ msg: "Wrong Credentials" });
                }
            });
        } else {
            res.status(201).send({ msg: "Wrong Credentials" });
        }
    } catch (err) {
        console.log(err);
        res.status(404).send({ msg: 'failed to Login' });
    }
});

module.exports = LoginRoutes;
