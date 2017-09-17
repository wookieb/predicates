import isObject from './object';
import isNumber from './number';
import {setDescription} from './utils/description';

/**
 * Checks whether a value looks like an array
 * That means:
 * * is an object
 * * has 'length' property
 * * 'length' property is a number greater or equal 0
 *
 * @example
 * is.arrayLike(arguments); // true
 * is.arrayLike(document.querySelectorAll('div')); // true
 * is.arrayLike([1, 2, 3]); // true
 * is.arrayLike({}); // false
 *
 * @param {*} value
 * @returns {boolean}
 */
export default function isArrayLike(value: any): boolean {
    return isObject(value) && isNumber(value.length) && value.length >= 0;
}

setDescription(isArrayLike, 'an array like object');