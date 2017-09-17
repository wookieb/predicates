import {setDescription} from "./utils/description";
/**
 * Checks whether a value is a number
 *
 * @example
 * is.number(10); // true
 * is.number('10'); // false
 * @param {*} value
 * @returns {boolean}
 */
function isNumber(value: any): value is number {
    return typeof value === 'number' || Object.prototype.toString.call(value) === '[object Number]';
}

setDescription(isNumber, 'a number');
export default isNumber;
