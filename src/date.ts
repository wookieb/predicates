/**
 * Checks whether a value is a Date object
 *
 * @function date
 *
 * @example
 * var is = require('predicates');
 *
 * is.date(new Date()); true
 * is.date(1415402574000); // false
 *
 * @param value
 */
function isDate(value: any): boolean {
    return Object.prototype.toString.call(value) === '[object Date]';
}

export = isDate;