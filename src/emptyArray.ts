import isArray from './array';

/**
 * Checks whether value is an empty array
 *
 * @param {*} value
 * @returns {boolean}
 */
export default function isEmptyArray(value: any): boolean {
    return isArray(value) && value.length === 0;
}