import {setDescription} from "./utils/description";

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
function isObject(value: any) {
    return value instanceof Object || (typeof value === 'object' && value !== null);
}

setDescription(isObject, 'an object');
export default isObject;