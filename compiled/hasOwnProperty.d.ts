import { Predicate } from './types';
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
 * @returns {(Boolean|Predicate)} bool if at least two arguments provided, otherwise a predicate
 */
declare function hasOwnProperty(property: string): Predicate;
declare function hasOwnProperty(property: string, object: Object): boolean;
export default hasOwnProperty;
