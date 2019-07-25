require('dotenv').config();
const express = require('express');
const server = express();
const Cars = require('../cars/carsModel.js');
server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up' });
});

server.get('/cars', (req, res) => {
    Cars.getAll()
        .then(cars => {
            res.status(200).json(cars);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

module.exports = server;
