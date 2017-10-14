import {setDescription} from './utils/description';

/**
 * Checks whether a value is falsy
 *
 * @example
 * is.falsy(0); // true
 * is.falsy(false); // true
 * is.falsy(1); // false
 */
function isFalsy(value: any): boolean {
    return !value;
}

setDescription(isFalsy, 'falsy');
export default isFalsy;
