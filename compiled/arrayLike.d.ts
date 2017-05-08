/**
 * Checks whether a value looks like an array
 * That means:
 * * is an object
 * * has 'length' property
 * * 'length' property is a number greater or equal 0
 *
 * **Aliases** _arrLike_
 *
 * @function arrayLike
 *
 * @example
 * var is = require('predicates');
 *
 * is.arrayLike(arguments); // true
 * is.arrayLike(document.querySelectorAll('div')); // true
 * is.arrayLike([1, 2, 3]); // true
 * is.arrayLike({}); // false
 *
 * @param {*} value
 * @returns {boolean}
 */
declare function isArrayLike(value: any): boolean;
export = isArrayLike;
