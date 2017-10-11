import {setDescription} from './utils/description';

/**
 * Checks whether a value is a function
 *
 * **Type guard:** value is Function
 *
 * @example
 * is.function(function() {}); // true
 * is.function(alert); // true
 * is.function('alert'); // false
 *
 * @param value
 * @returns {bool}
 */
function isFunction(value: any): value is Function {
    return typeof value === 'function';
}

setDescription(isFunction, 'a function');
export default isFunction;