'use strict';

var isObject = require('./object'),
    handleCurry = require('./utils/handleCurry');

/**
 * Checks whether an object has own property
 *
 * @param {String} property
 * @param {Object} object
 * @returns {(Boolean|Predicate)} bool if two arguments provided, otherwise a predicate
 */
module.exports = function(property, object) {
    return handleCurry.call(this, arguments, function(object) {
        return isObject(object) && object.hasOwnProperty(property);
    });
};
