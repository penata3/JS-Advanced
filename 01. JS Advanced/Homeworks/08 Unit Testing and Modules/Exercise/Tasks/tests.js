let sum = require('./demo');
let assert = require('chai').assert;


describe("Testing function sum", () => {
    it('Return the correct sum', () => {
        assert.equal(sum(1, 2), 3, "The sum must be 3");
    })
})