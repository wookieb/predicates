import isString from './string';
import isNumber from './number';
import isBoolean from './boolean';
import isUndefined from './undefined';
import isNull from './null';
import isObject from './object';
import {setDescription} from './utils/description';

/**
 * Checks whether a value is a primitive.
 *
 * Helpful links:
 * * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
 * * http://javascriptweblog.wordpress.com/2010/09/27/the-secret-life-of-javascript-primitives/
 *
 * NOTE! A primitive value wrapped by a corresponding object is not a primitive anymore
 *
 *
 * @example
 * is.primitive('test'); // true
 * is.primitive(undefined); // true
 * is.primitive(10); // true
 * is.primitive(null); // true
 * is.primitive(false); // true
 *
 * is.primitive(new Number(10)); // false
 * is.primitive(new String('test')); // false
 * is.primitive(new Boolean(true)); // false
 * is.primitive({}); // false
 */
function isPrimitive<T = string | number | boolean | null | undefined>(value: T): value is T {
    return !isObject(value) && (isString(value) || isNumber(value) || isBoolean(value) || isUndefined(value) || isNull(value));
}

setDescription(isPrimitive, 'a primitive');
export default isPrimitive;