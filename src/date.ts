import {setDescription} from './utils/description';

/**
 * Checks whether a value is a Date object
 *
 * @example
 * is.date(new Date()); true
 * is.date(1415402574000); // false
 *
 * @param value
 */
export default function isDate(value: any): value is Date {
    return Object.prototype.toString.call(value) === '[object Date]';
}

setDescription(isDate, 'a Date');