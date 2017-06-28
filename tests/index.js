'use strict';

const assert = require('assert');

const Promise = require('../promise');

describe('Promise', () => {
    it('usual then', done => {
        const promise = new Promise(resolve => {
            return resolve(5);
        });

        promise.then(res => {
            assert.equal(res, 5, 'res !== 5');
            done();
        });
    });

    // it('usual then 2', done => {
    //     const promise = new Promise(resolve => {
    //         return resolve(6);
    //     });
    //
    //     promise.then(res => {
    //         assert.equal(res, 6, 'res !== 6');
    //         done();
    //     });
    // });
    //
    // it('async then', done => {
    //     const promise = new Promise(resolve => {
    //         setTimeout(() => resolve(5), 0);
    //     });
    //
    //     promise.then(res => {
    //         assert.equal(res, 5);
    //         done();
    //     });
    // });
    //
    // it('reject test', done => {
    //     const promise = new Promise((resolve, reject) => {
    //         reject('some error');
    //     });
    //
    //     promise
    //         .then(() => {
    //             throw new Error('then is called');
    //         })
    //         .catch(msg => {
    //             assert.equal(msg, 'some error');
    //             done();
    //         });
    // });
    //
    // it('async reject test', done => {
    //     const promise = new Promise((resolve, reject) => {
    //         setTimeout(() => reject('some error'), 0);
    //     });
    //
    //     promise
    //         .then(() => {
    //             throw new Error('then is called');
    //         })
    //         .catch(msg => {
    //             assert.equal(msg, 'some error');
    //             done();
    //         });
    // });
    //
    // it('multiple results test', done => {
    //     const promise = new Promise((resolve, reject) => {
    //         resolve(1, 2, 3);
    //     });
    //
    //     promise
    //         .then((a, b, c) => {
    //             assert.equal(a, 1);
    //             assert.equal(b, 2);
    //             assert.equal(c, 3);
    //             done();
    //         });
    // });
    //
    // it('promise chain', done => {
    //     (new Promise(resolve => resolve(0)))
    //         .then(res => {
    //             assert.equal(res, 0);
    //             return new Promise(resolve => resolve(1));
    //         })
    //         .then(res => {
    //             assert.equal(res, 1);
    //             return new Promise(resolve => setTimeout(() => resolve(2), 0));
    //         })
    //         .then(res => {
    //             assert.equal(res, 2);
    //             done();
    //         })
    // });
    //
    // it('promise chain 2', done => {
    //     (new Promise(resolve => resolve(0)))
    //         .then(res => {
    //             assert.equal(res, 0);
    //             return new Promise(resolve => setTimeout(() => resolve(1), 0));
    //         })
    //         .then(res => {
    //             assert.equal(res, 1);
    //             return new Promise(resolve => resolve(2));
    //         })
    //         .then(res => {
    //             assert.equal(res, 2);
    //             done();
    //         })
    // });
});