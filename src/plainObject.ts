import isObject from './object';
import {setDescription} from './utils/description';

/**
 * Checks whether a value is a plain object.
 * Plain object is an object of which prototype is Object.prototype or null
 *
 * **Type guard:** value is Object
 *
 * @example
 * is.plainObject({property: 'value'}); // true
 * is.plainObject(new Object); // true
 * is.plainObject(Object.create(null)); // true
 * is.plainObject(new String('test')); // false
 *
 * const Foo = function() {};
 * is.plainObject(new Foo); // false
 *
 * @param {*} value
 * @returns {boolean}
 */
function isPlainObject(value: any): value is Object {
    if (!isObject(value)) {
        return false;
    }
    const proto = Object.getPrototypeOf(value);
    return proto === Object.prototype || proto === null;
}

setDescription(isPlainObject, 'a plain object');
export default isPlainObject;