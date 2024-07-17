const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');

// Add a new customer
router.post('/customers', async (req, res) => {
    try {
        const customer = new Customer(req.body);
        await customer.save();
        res.status(201).send(customer);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all customers
router.get('/customers', async (req, res) => {
    try {
        const customers = await Customer.find();
        res.status(200).send(customers);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
