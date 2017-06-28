'use strict';

function sum() {
    let res = 0;
    for(let i = 0; i < arguments.length; i++) {
        res += arguments[i];
    }
    return res;
}

function superSum(superNumber) {
    return function (number) {
        return superNumber + number;
    }
}

function map(arr, func) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(func(arr[i]));
    }
    return res;
}

module.exports = {
    sum,
    superSum,
    map
};