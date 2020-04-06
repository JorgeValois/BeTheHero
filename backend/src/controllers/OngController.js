const crypto = require('crypto');
const connection = require('../database/connection');
const generateUniqueId = require('../util/generateUniqueId');

module.exports = {

    async findAll(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request,response) {
        const {name, email, city, uf, whatsapp} = request.body;

    const id = generateUniqueId(4);

    await connection('ongs').insert({
        id,
        name,
        email,
        city,
        uf,
        whatsapp,
    })
    
    return response.json({id})
    }

 
}