'use strict';

function Promise (func) {
    const self = this;

    function resolve(...smth) {
        self.result = smth;
        if(self.func) {
            self.func(smth);
        }
    }

    function reject(err) {
        self.err = err;
        if(self.errFunc) {
            self.errFunc(err);
        }
    }

    func(resolve, reject);
}

Promise.prototype = {
    then: function (func) {
        if(this.result) {
            return func(...this.result);
        } else {
            this.func = func;
        }
        return this;
    },
    catch: function (func) {
        if(this.err) {
            func(this.err);
        } else {
            this.errFunc = func;
        }
    }
};

module.exports = Promise;