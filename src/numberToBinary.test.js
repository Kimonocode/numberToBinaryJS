const { assert, expect }= require('chai');
const { numberToBinary } = require ('./numberToBInary');

describe('Convert a number to binary', () => {

    it('should throw an error if n is not a number', () => {
        expect(() => numberToBinary('5')).to.throw('NAN: 5 is not a number')
    });

    it('should equal 0 whit 0', () => {
        assert.equal(0, numberToBinary(0));
    });

    it('should equal 1 whit 1', () => {
        assert.equal(1, numberToBinary(1));
    });

    it('should equal 10 whit 2', () => {
        assert.equal(10, numberToBinary(2));
    });

    it('should equal 101 whit 5', ()  => {
        assert.equal(101, numberToBinary(5));
    });

    it('should equal 110110000 whit 432', () => {
        assert.equal(110110000, numberToBinary(432));
    });

    it('should equal 1111100010110 whit 7958', () => {
        assert.equal(1111100010110, numberToBinary(7958));
    });
});