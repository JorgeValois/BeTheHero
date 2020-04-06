const generateUniqueId = require('../../src/util/generateUniqueId');

describe('Generate Unique ID.', () => {
    it('should generate an unique ID', () =>{
        const id = generateUniqueId(4);
        expect(id).toHaveLength(8);
    }) ;
});