import {setDescription} from './utils/description';

/**
 * Checks whether a value is truthy
 *
 * **Type guard:** _none_
 *
 * @example
 * is.truthy(true); // true
 * is.truthy(1); // true
 * is.truthy(0); // false
 *
 * @param {*} value
 * @returns {bool}
 */
function isTruthy(value: any): boolean {
    return !!value;
}

setDescription(isTruthy, 'truthy');

export default isTruthy;
