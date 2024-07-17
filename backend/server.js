const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

const customerRoutes = require('./routes/customer');
const vehicleRoutes = require('./routes/vehicle');

app.use('/customers', customerRoutes);
app.use('/vehicles', vehicleRoutes);

//connecting to DB
const PORT = 3005;
const URL = "mongodb+srv://Admin:12345678@cluster0.cekkhwq.mongodb.net/IT22342024BrokerLK?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => console.log('DB error', err));

app.listen(PORT, () => {
    console.log("App is running on port", PORT);
});
