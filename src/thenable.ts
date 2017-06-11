/**
 * Checks whether value is thenable according to Promise A+ spec https://promisesaplus.com/
 * Useful to asses whether value might be used as promise
 *
 * @param {*} value
 * @returns {boolean}
 */
export default function isThenable(value: any): boolean {
    return !!value && typeof value.then === 'function';
}