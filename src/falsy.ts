/**
 * Checks whether a value is falsy
 *
 * **Aliases** _falsey_
 *
 * @function falsy
 *
 * @example
 * var is = require('predicates');
 *
 * is.falsy(0); // true
 * is.falsy(false); // true
 * is.falsy(1); // false
 *
 * @param {*} value
 * @returns {Boolean}
 *
 */
function isFalsy(value: any): boolean {
    return !value;
}

export = isFalsy;
