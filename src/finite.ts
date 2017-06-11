import isNumber from './number';

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
 * @returns {boolean}
 */
function isFinitePolyfill(value: any): boolean {
    return isNumber(value) && value !== Infinity && value !== -Infinity && !isNaN(value);
}

const isFinite = ('isFinite' in Number) ? (<any>Number).isFinite : isFinitePolyfill;

export default isFinite;
