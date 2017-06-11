import isBoolean from './boolean';

/**
 * Checks whether a value is false a boolean false
 *
 * @function false
 *
 * @example
 * var is = require('predicates');
 *
 * is.false(false); // true
 * is.false(0); // false
 *
 * @param {*} value
 * @returns {boolean}
 * @name false
 */
function isFalse(value: boolean): boolean {
    return value === false || (isBoolean(value) && value.valueOf() === false);
}

export default isFalse;
