const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () =>{
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new ONG.', async () => {
        const response = await request(app).post('/ong').send({
            name: "ONG 3",
            email: "ong@teste.com",
            city: "Salvador",
            uf: "BA",
            whatsapp: "71998999979"
        });
       expect(response.body).toHaveProperty('id');
       expect(response.body.id).toHaveLength(8);

    });
});