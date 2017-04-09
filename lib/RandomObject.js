'use strict';

var _util = require('./util');

var randomObject = function randomObject() {
    var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _util.random1To10)();
    var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _util.random1To10)();

    var ret = {};
    for (var i = 0; i < width; i++) {
        ret[(0, _util.randomAlphaNumeric)()] = depth === 0 ? (0, _util.randomAlphaNumeric)() : randomObject(1, depth - 1);
    }
    return ret;
};

module.exports = {
    randomObject: randomObject
};