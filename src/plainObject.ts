import isObject from './object';

/**
 * Checks whether a value is a plain object.
 * Plain object is an object which prototype is Object.prototype or null
 *
 * @function plainObject
 *
 * @example
 * var is = require('predicates');
 *
 * is.plainObject({property: 'value'}); // true
 * is.plainObject(new Object); // true
 * is.plainObject(Object.create(null)); // true
 * is.plainObject(new String('test')); // false
 *
 * var Foo = function() {};
 * is.plainObject(new Foo); // false
 *
 * @param {*} value
 * @returns {boolean}
 */
function isPlainObject(value: any) {
    if (!isObject(value)) {
        return false;
    }
    const proto = Object.getPrototypeOf(value);
    return proto === Object.prototype || proto === null;
}

export default isPlainObject;