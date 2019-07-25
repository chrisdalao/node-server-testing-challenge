const db = require('../data/dbConfig.js');

const Cars = require('./carsModel.js');

describe('cars model', () => {
    beforeEach(async () => {
        await db('cars').truncate();//resets the database - cleans it up 
    });
    // it('db environement set to testing', () => {
    //     expect(process.env.DB_ENV).toBe('testing');
    // })

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

    describe('update()', () => {
        it('should update a car in the db', () => {
            return Cars.update(1, { name: 'hello' })
                .then(car => {
                    expect(car).toBe(0);
                })
        })
    })

    describe('getAll()', () => {
        it('should get all cars in the db', async () => {
            return Cars.getAll()
                .then(cars => {
                    console.log(cars)
                    expect(cars).toHaveLength(0)
                });
        })
    })

    describe('findById()', () => {
        it('should get a car by its id', () => {
            return Cars.findById(1)
                .then(car => {
                    expect(car).toHaveLength(0)
                })
        })
    })

    describe('delete()', () => {
        it('should delete a car by its id', () => {
            return Cars.remove(1)
                .then(car => {
                    expect(car).toBe(0);
                })
        })
    })

});