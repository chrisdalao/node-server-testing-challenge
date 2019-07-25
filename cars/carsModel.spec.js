const db = require('../data/dbConfig.js');

const Cars = require('./carsModel.js');

describe('cars model', () => {
    beforeEach(async () => {
        await db('cars').truncate();//resets the database - cleans it up 
    });

    describe('instert()', () => {
        it('should insert the car into the db', async () => {
            await Cars.insert({ name: 'supra' }) //using the api

            const cars = await db('cars')//directly looking into the db

            expect(cars).toHaveLength(1)

        })

        it('should insert the car into the db', async () => {
            await Cars.insert({ name: 'spyder' }); //using the api
            await Cars.insert({ name: 'mustang' }); //using the api

            const cars = await db('cars') // directly looking into the db

            expect(cars).toHaveLength(2);
        })
    })
});