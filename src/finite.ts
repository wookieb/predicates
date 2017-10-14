import isNumber from './number';
import {setDescription} from './utils/description';

/**
 * Checks whether a value is a number and it's finite
 *
 * @example
 * is.finite(1); // true
 * is.finite(Infinity); // false
 */
function isFinitePolyfill(value: any): value is number {
    return isNumber(value) && value !== Infinity && value !== -Infinity && !isNaN(value);
}

const isFinite = ('isFinite' in Number) ? (<any>Number).isFinite : isFinitePolyfill;
setDescription(isFinite, 'a finite number');
export default isFinite;
