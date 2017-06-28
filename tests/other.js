'use strict';

const assert = require('assert');
const { sum, superSum, map } = require('../other');

describe('summator', () => {
    it('sum(a, b)', () => {
        const res = sum(2, 4);
        assert.equal(res, 6);
    });


    it('sum(a, b, c)', () => {
        const res = sum(2, 4, 3);
        assert.equal(res, 9);
    });

    it('superSum(a)', () => {
        const summator5 = superSum(5);
        const res = summator5(3);
        assert.equal(res, 8); // 5 + 3
    });

    it('map()', () => {
        const arr = [0, 1, 2];
        const res = map(arr, x => x * 2);
        assert.deepEqual(res, [0, 2, 4]);
    });

    it('map() 2', () => {
        const arr = [0, 1, 2];
        const res = map(arr, x => x + 2);
        assert.deepEqual(res, [2, 3, 4]);
    });
});