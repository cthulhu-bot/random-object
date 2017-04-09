'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// Depth: number of nested object in a given object
var objDepth = function objDepth(obj) {
    var acc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    // Filter object by keys containing child objects
    var objectValues = Object.keys(obj).filter(function (key) {
        return _typeof(obj[key]) === 'object';
    });
    // if no child objects are found return the current object depth
    if (objectValues.length === 0) return acc;

    // else recursively call objDepth increasing the current object depth
    // compile these depths into an array of each key's final discovered child object depth
    // finally return the maximum depth discovered
    return objectValues.reduce(function (keyDepths, key) {
        var ret = keyDepths.concat(objDepth(obj[key], ++acc));
        acc = 0;
        return ret;
    }, []).reduce(function (a, b) {
        return Math.max(a, b);
    });
};

// Width: number of keys in a given object
var objWidth = function objWidth(obj) {
    return Object.keys(obj).length;
};

var random1To10 = function random1To10() {
    return Math.floor(Math.random() * 10) + 1;
};

var alphaNumerics = function alphaNumerics() {
    return ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
};

var randomAlphaNumeric = function randomAlphaNumeric() {
    var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;

    var ret = [];
    for (var i = 0; i < length; i++) {
        var rando = Math.floor(Math.random() * 36);
        ret.push(alphaNumerics()[rando]);
    }
    return ret.join('');
};

module.exports = {
    objDepth: objDepth,
    objWidth: objWidth,
    random1To10: random1To10,
    randomAlphaNumeric: randomAlphaNumeric
};