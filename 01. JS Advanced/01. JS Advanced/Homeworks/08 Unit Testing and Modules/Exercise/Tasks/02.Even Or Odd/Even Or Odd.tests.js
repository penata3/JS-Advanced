let isOddOrEven = require('./Even Or Odd');
let assert = require('chai').assert;


describe('Testing the functionality of isOddOrEven()', () => {

    it('Testing with not string argument', () => {
        let result = isOddOrEven(1);
        assert.equal(result, undefined, 'The result should be undefined')
    })

    it('Testing with even string length', () => {
        let result = isOddOrEven('true');
        assert.equal(result, 'even', 'The result should be even');
    })


    it('Testing with odd string length', () => {
        let result = isOddOrEven('123');
        assert.equal(result, 'odd', 'The result should be odd');
    })

})