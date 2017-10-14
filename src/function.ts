import {setDescription} from './utils/description';

/**
 * Checks whether a value is a function
 *
 * @example
 * is.function(function() {}); // true
 * is.function(alert); // true
 * is.function('alert'); // false
 */
function isFunction(value: any): value is Function {
    return typeof value === 'function';
}

setDescription(isFunction, 'a function');
export default isFunction;