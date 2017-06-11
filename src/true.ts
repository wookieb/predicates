import isBoolean from './boolean';
/**
 * Checks whether a value is a boolean true
 *
 * @example
 * var is = require('predicates');
 *
 * is.true(true); // true
 * is.true('true'); // false
 */
function isTrue(value: any): boolean {
    return value === true || (isBoolean(value) && value == true);
}

export default isTrue;