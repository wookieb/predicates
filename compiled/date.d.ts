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
declare function isDate(value: any): boolean;
export = isDate;
