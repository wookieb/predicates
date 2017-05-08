/**
 * Checks whether a value is an object
 *
 * **Aliases** _obj_
 *
 * @function object
 *
 * @example
 * var is = require('predicates');
 *
 * is.object({}); // true
 * is.object('object'); // false
 *
 * @param value
 */
declare function isObject(value: any): boolean;
export = isObject;
