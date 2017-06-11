/**
 * Checks whether a value is an object and ignores null
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
export default isObject;
