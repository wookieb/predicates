import isArray from './array';

/**
 * Checks whether value is an array and is not empty
 *
 * @param {*} value
 * @return {boolean}
 */
export default function notEmptyArray(value: any): boolean {
    return isArray(value) && value.length > 0;
}