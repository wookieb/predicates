import isObject from './object';
import isString from './string';
import handleCurry from './utils/handleCurry';
import {Predicate} from './types';

/**
 * Checks whether an object has own property
 *
 * **Aliases** _hasOwn_
 *
 * @function hasOwnProperty
 *
 * @example
 * var is = require('predicates');
 *
 * var isCustomized = is.hasOwnProperty('delay');
 *
 * var Timer = function() {};
 * Timer.prototype.delay = 100;
 *
 * var timer1 = new Timer();
 * var timer2 = new Timer();
 * timer1.delay = 1000;
 *
 * isCustomized(timer1) // true
 * // same as
 * is.hasOwnProperty('delay', timer1); // true
 *
 * isCustomized(timer2); // false
 *
 * @param {String} property
 * @param {Object} [object]
 * @throws {TypeError} if property is not a string
 * @returns {(boolean|Predicate)} bool if at least two arguments provided, otherwise a predicate
 */
function hasOwnProperty(property: string): Predicate ;
function hasOwnProperty(property: string, object: Object): boolean;
function hasOwnProperty(property: string, object?: Object): boolean | Predicate {
    if (!isString(property)) {
        throw new TypeError('Property name must be a string');
    }
    return handleCurry.call(this, arguments, (object: Object) => {
        return isObject(object) && Object.prototype.hasOwnProperty.call(object, property);
    });
}

export default hasOwnProperty;