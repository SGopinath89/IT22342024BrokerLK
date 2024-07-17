const express = require('express');
const router = express.Router();
const Vehicle = require('../models/Vehicle');

// Add a new vehicle
router.post('/vehicles', async (req, res) => {
    try {
        const vehicle = new Vehicle(req.body);
        await vehicle.save();
        res.status(201).send(vehicle);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all vehicles
router.get('/vehicles', async (req, res) => {
    try {
        const vehicles = await Vehicle.find().populate('owner');
        res.status(200).send(vehicles);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
