const assert = require('assert')

const People = require('../src/index.js')


describe('test A', function () {
    it('should return 2 legs', function (done) {
        let maple = new People('')
        assert.equal(maple.legs, 2) 
        done()
    })
})