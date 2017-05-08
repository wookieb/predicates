import { Predicate } from './types';
/**
 * Checks whether a value is an instance of given "class"
 *
 * **Aliases** _instance_
 *
 * @function instanceOf
 *
 * @example
 * var is = require('predicates');
 *
 * var Duck = function() {};
 * var Car = function() {};
 *
 * var isDuck = is.instanceOf(Duck);
 *
 * isDuck(new Duck); // true
 * // same as
 * is.instanceOf(Duck, new Duck); // true
 *
 * isDuck(new Car); // false
 *
 *
 * @param {Function} clazz
 * @param {*} [value]
 * @throws {TypeError} if class is not a function
 * @returns {(boolean|Predicate)} bool if at least two arguments provided, otherwise a predicate
 */
declare function isInstanceOf(clazz: Function): Predicate;
declare function isInstanceOf(clazz: Function, value: any): boolean;
export = isInstanceOf;
