import {setDescription} from './utils/description';

/**
 * Checks whether a value is falsy
 *
 * **Type guard:** _none_
 *
 * @example
 * is.falsy(0); // true
 * is.falsy(false); // true
 * is.falsy(1); // false
 *
 * @param {*} value
 * @returns {boolean}
 */
function isFalsy(value: any): boolean {
    return !value;
}

setDescription(isFalsy, 'falsy');
export default isFalsy;
