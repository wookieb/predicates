import {setDescription} from './utils/description';

/**
 * Checks whether a value is null
 *
 * **Type guard:** value is null
 *
 * @example
 * is.null(null); // true
 * is.null({}); // false
 *
 * @param {*} value
 * @returns {boolean}
 */
function isNull(value: any): value is null {
    return value === null;
}

setDescription(isNull, 'null');
export default isNull;
