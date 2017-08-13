/**
 * Checks whether a value is undefined
 *
 * @example
 * var is = require('predicates');
 *
 * is.undefined(undefined); // true
 * is.undefined(0); // false
 */
import {setDescription} from "./utils/description";

function isUndefined(value: any): boolean {
    return typeof value === 'undefined';
}

setDescription(isUndefined, 'undefined');

export default isUndefined;
