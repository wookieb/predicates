/**
 * Checks whether a value is undefined
 *
 * @example
 * is.undefined(undefined); // true
 * is.undefined(0); // false
 */
import {setDescription} from "./utils/description";

function isUndefined(value: any): value is undefined {
    return typeof value === 'undefined';
}

setDescription(isUndefined, 'undefined');

export default isUndefined;
