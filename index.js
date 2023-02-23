const express = require('express');
const app = express();
require('dotenv').config();
const RegisterRoutes = require('./routes/register.route');
const LoginRoter = require('./routes/login.route');
const PORT = process.env.PORT || 3000;
const connect = require('./Configs/config');
const cors = require('cors');
const { FlightRouter } = require('./routes/flights.route');
const { auth } = require('./middlewares/validate.middleware');
const { BookRouter } = require('./routes/booking.route');
const { DashboardRouter } = require('./routes/dsshboard.route');

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Welcome in Air Ticket Booking App');
});

app.use('/api', RegisterRoutes);
app.use('/api', LoginRoter);
app.use('/api', BookRouter);
app.use('/api', DashboardRouter);


app.use(auth);
app.use('/api/flights', FlightRouter);




app.listen(PORT, async () => {
    try {
        await connect();
        console.log('Connected to DB');
    } catch (err) {
        console.log({ message: err.message });
    }
    console.log(`Server is listening on ${PORT}`);
});