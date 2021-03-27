let lookupChar = require('./Char Lookup');
let assert = require('chai').assert;

describe('Testing the functionality of lookupChar()', () => {

    it('Testing with non string argument', () => {
        let result = lookupChar([1, 2, 4], 2);
        assert.equal(result, undefined, 'The fist argument should be string');
    })

    it('Testring with not number second argument', () => {
        let result = lookupChar('Hello', 'asd');
        assert.equal(result, undefined, 'The result shoud be undefined');
    })

    it('Testring with non integer number', () => {
        let result = lookupChar('hello', 2.3);
        assert.equal(result, undefined)
    })

    it('Testing with bigger index value', () => {
        let result = lookupChar('hello', 5);
        assert.equal(result, 'Incorrect index');
    })

    it('Testing with negative index value', () => {
        let result = lookupChar('hello', -2);
        assert.equal(result, 'Incorrect index');
    })

    it('Testing wiht index equal to the length of the string', () => {
        let result = lookupChar('hello', 5);
        assert.equal(result, 'Incorrect index');
    })

    it('Testing wiht correct index value', () => {
        let result = lookupChar('hello', 0);
        assert.equal(result, 'h');
    })
})