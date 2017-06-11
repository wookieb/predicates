/**
 * Checks whether value is WeakMap
 *
 * @param {*} value
 * @returns {boolean}
 */
export default function isWeakMap(value: any): boolean {
    return typeof WeakMap !== 'undefined' && value instanceof WeakMap;
}