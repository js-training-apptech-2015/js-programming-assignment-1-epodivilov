var assert = chai.assert;

describe('solution1', function () {
    it('John passed 10km of 100km. Moving at the speed of 5 km per day would need 18 days to pass the rest of the way.', function () {
        assert.equal(solution1(10,100,5), 18)
    });

    it('John passed 15km of 253km. Moving at the speed of 9 km per day would need 18 days to pass the rest of the way.', function () {
        assert.equal(solution1(15,253,9), 27)
    });

    it('John passed 26 of 684. Moving at the speed of 15 km per day would need 18 days to pass the rest of the way.', function () {
        assert.equal(solution1(26,684,15), 44)
    });
});

describe('solution2', function () {
    it('Maximum XOR of the two numbers between "0" and "0" is equal to 0', function () {
        assert.equal(solution2(0,0),0)
    });

    it('Maximum XOR of the two numbers between "0" and "4" is equal to 7', function () {
        assert.equal(solution2(0,4),7)
    });

    it('Maximum XOR of the two numbers between "4" and "10" is equal to 15', function () {
        assert.equal(solution2(4,10),15)
    });
});