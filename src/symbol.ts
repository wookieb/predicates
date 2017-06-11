/**
 * Checks whether value is Set
 *
 * @param {*} value
 * @returns {boolean}
 */
export default function isSymbol(value: any): boolean {
    return typeof value === 'symbol';
}

