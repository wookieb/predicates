/**
 * Checks whether value is Set
 *
 * @param {*} value
 * @returns {boolean}
 */
export default function isSet(value: any): boolean {
    return typeof Set !== 'undefined' && value instanceof Set;
}