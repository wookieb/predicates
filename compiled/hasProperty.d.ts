import { Predicate } from './types';
/**
 * Checks whether an object has a given property
 *
 * **Aliases** _has_
 *
 * @function hasProperty
 *
 * @example
 * var is = require('predicates');
 *
 * var isDuck = is.hasProperty('quack');
 *
 * isDuck({quack: ':)'}); // true
 * // same as
 * is.hasProperty('quack', {quack: ':)'}); // true
 *
 * isDuck({type: 'car'}); // false
 *
 * @param {String} property
 * @param {Object} [object]
 * @throws {TypeError} if property is not a string
 * @returns {(Boolean|Predicate)} bool if at least two arguments provided, otherwise a predicate
 */
declare function hasProperty(property: string): Predicate;
declare function hasProperty(property: string, object: Object): boolean;
export default hasProperty;
