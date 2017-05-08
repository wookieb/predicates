/**
 * Checks whether a value is null
 *
 * @function null
 *
 * @example
 * var is = require('predicates');
 *
 * is.null(null); // true
 * is.null({}); // false
 *
 * @param {*} value
 * @returns {boolean}
 */
function isNull(value: any): boolean {
    return value === null;
}

export = isNull;
