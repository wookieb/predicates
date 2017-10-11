import {setDescription} from './utils/description';

/**
 * Checks whether a value is a boolean
 *
 * **Type guard:** value is boolean
 *
 * @example
 * is.boolean(true); // true
 * is.boolean(false); // true
 * is.boolean(0); // false
 *
 * @param {*} value
 * @returns {bool}
 */
export default function isBoolean(value: any): value is boolean {
    return typeof value === 'boolean' || Object.prototype.toString.call(value) === '[object Boolean]';
}

setDescription(isBoolean, 'a boolean');