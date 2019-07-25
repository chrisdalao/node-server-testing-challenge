require('dotenv').config();

const db = require('../data/dbConfig.js');

module.exports = {
    insert,
    update,
    remove,
    getAll,
    findById,
};

async function insert(car) {
    return db('cars').insert(car, 'id');
}

function update(id, changes) {
    return db('cars')
        .where('id', id)
        .update(changes)
}

function remove(id) {
    return db('cars')
        .where('id', id)
        .del();
}

function getAll() {
    return db('cars');
}

function findById(id) {
    return db('cars').where({ id: Number(id) });
}
