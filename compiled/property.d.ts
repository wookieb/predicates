import { Predicate } from './types';
/**
 * Checks whether a value of given property of an object satisfies a predicate
 *
 * If you need to check more properties at a time use {@link structure}.
 *
 * NOTE! Provided predicate will be called ALWAYS if a provided value is an object.
 *
 * **Aliases** _prop_
 *
 * @function property
 *
 * @example
 * var is = require('predicates');
 *
 * is.property('name', is.string, {name: 'Tommy'}); // true
 * is.property('name', is.string)({name: 'Tommy'}); // true
 * is.property('name', is.string, {name: 2}); // false - since 2 is not a string
 * is.property('name', is.string, {}); // false - since undefined is not a string
 *
 * @param {*} propertyName
 * @param {Predicate} predicate
 * @param {Object} [object]
 * @param {...*} [extraParams] additional arguments passed to the predicate
 *
 * @throws {TypeError} if predicate is not a function
 * @throws {Error} if too few arguments provided
 */
declare function property(propertyName: string, predicate: Predicate): Predicate;
declare function property(propertyName: string, predicate: Predicate, object: Object, ...extraParams: any[]): boolean;
export = property;
