import isNumber from './number';
import {setDescription} from './utils/description';

/**
 * Checks whether a value is a number and it's finite
 *
 * **Type guard:** value is number
 *
 * @example
 * is.finite(1); // false
 * is.finite(Infinity); // false
 *
 * @param {*} value
 * @returns {boolean}
 */
function isFinitePolyfill(value: any): value is number {
    return isNumber(value) && value !== Infinity && value !== -Infinity && !isNaN(value);
}

const isFinite = ('isFinite' in Number) ? (<any>Number).isFinite : isFinitePolyfill;
setDescription(isFinite, 'a finite number');
export default isFinite;
