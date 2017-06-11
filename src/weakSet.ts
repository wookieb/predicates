/**
 * Checks whether value is WeakSet
 *
 * @param {*} value
 * @returns {boolean}
 */
export default function isWeakSet(value: any): boolean {
    return typeof WeakSet !== 'undefined' && value instanceof WeakSet;
}