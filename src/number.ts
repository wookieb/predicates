/**
 * Checks whether a value is a number
 *
 * **Aliases** _num_
 *
 * @function number
 *
 * @example
 * var is = require('predicates');
 *
 * is.number(10); // true
 * is.number('10'); // false
 * @param {*} value
 * @returns {boolean}
 */
function isNumber(value: any): boolean {
    return typeof value === 'number' || Object.prototype.toString.call(value) === '[object Number]';
}

export default isNumber;
