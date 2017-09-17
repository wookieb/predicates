/**
 * Checks whether a value is truthy
 *
 * @example
 * is.truthy(true); // true
 * is.truthy(1); // true
 * is.truthy(0); // false
 */
import {setDescription} from "./utils/description";

function isTruthy(value: any): boolean {
    return !!value;
}

setDescription(isTruthy, 'truthy');

export default isTruthy;
