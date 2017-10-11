import {setDescription} from './utils/description';

/**
 * Checks whether a value is an object and ignores null
 *
 * **Type guard:** value is Object
 *
 * @example
 * is.object({}); // true
 * is.object('object'); // false
 *
 * @param value
 * @returns {boolean}
 */
function isObject(value: any): value is Object {
    return value instanceof Object || (typeof value === 'object' && value !== null);
}

setDescription(isObject, 'an object');
export default isObject;