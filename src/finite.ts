import isNumber = require('./number');

/**
 * Checks whether a value is a number and it's finite
 *
 * @function finite
 *
 * @example
 * var is = require('predicates');
 *
 * is.finite(1); // false
 * is.finite(Infinity); // false
 *
 * @param {*} value
 * @returns {Boolean}
 */
function isFinitePolyfill(value: any): boolean {
    return isNumber(value) && value !== Infinity && value !== -Infinity && !isNaN(value);
}

export = ('isFinite' in Number) ? (<any>Number).isFinite : isFinitePolyfill;
