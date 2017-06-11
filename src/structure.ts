import {Predicate} from './types';
import isObject from './object';
import handleCurry from './utils/handleCurry';
import objectOf from './objectOf';
import isFunction from './function';

const isObjectOfPredicates = objectOf(isFunction);

/**
 * Checks whether an object satisfies predicates defined in structure
 *
 * NOTE: All predicates defined in structure must be satisfied.
 * If some of the properties are optional use [undefinedOr](#undefinedOr)
 *
 * You shouldn't use this function to validate input from the user and expect complex report "what's wrong with this is object".
 * There are few reasons for that:
 * * it's just a predicate (that returns only true or false)
 * * breaks [the design rule](design.md#user-content-defined-and-generated-predicates-will-not-throw-any-errors)
 *
 * See examples for inspiration how you can use _structure_
 *
 * @function structure
 *
 * @example
 * // simple object matching
 * var is = require('predicates');
 *
 * var schema = {
 *      name: is.string, // only string
 *      phone: is.or(is.string, is.number), // string or number
 *      surname: is.undefinedOr(is.string) // optional
 * },
 *     isPerson = is.structure(schema);
 *
 * var person = {name: 'Tommy', phone: 80129292};
 * isPerson(person); // true
 * // same as
 * is.structure(schema, person); // true
 * isPerson({name: 'Tommy'});
 *
 * @example
 * // filtering
 * var is = require('predicates');
 *
 * var people = [
 *  {name: 'Prof. Bend Ovah', age: 55, sex: 'male'},
 *  {name: 'Dr. Supa Kaki', age: 34, sex: 'female'},
 *  {name: 'Prof. Anti Santy', age: 46, sex: 'male'}
 * ];
 *
 * var professors = people.filter(is.structure({
 *  name: is.startsWith('Prof.')
 * }));
 *
 * // [
 * //   {name: 'Prof. Bend Ovah', age: 55, sex: 'male'},
 * //   {name: 'Prof. Anti Santy', age: 46, sex: 'male'}
 * // ]
 *
 * @example
 * // duck typing
 *
 * var isDuck = is.structure({
 *  quack: is.function,
 *  walk: is.function
 * });
 *
 * isDuck({
 *    say: function() { return 'woof! woof!';
 * }}); // not a duck
 *
 * isDuck({
 *    quack: function() { return 'quack!'; },
 *    walk: function() { return 'tup tup tup'; }
 * }); // yep, it's a duck
 *
 * @param {Object} structure
 * @param {Object} [value]
 * @param {...*} [extraArgs] additional arguments passed to the predicates
 * @return {(boolean|Predicate)} returns bool if more than 1 argument provided, otherwise a predicate
 */
function isStructure(structure: { [name: string]: Predicate }): Predicate;
function isStructure(structure: { [name: string]: Predicate }, value: Object): boolean;
function isStructure(structure: { [name: string]: Predicate }, value?: Object, ...extraArgs: any[]): boolean | Predicate {
    if (!isObject(structure)) {
        throw new TypeError('Structure must be an object');
    }

    const keys = Object.keys(structure);
    if (keys.length === 0) {
        throw new Error('Structure object cannot be empty. No enumerable properties found');
    }

    if (!isObjectOfPredicates(structure)) {
        throw new TypeError('Structure object must consist of predicates');
    }

    return handleCurry.call(this, arguments, function isStructurePredicate(value: Object) {
        const match = (key: string) => structure[key].apply(this, [(<any>value)[key]].concat(extraArgs));
        return isObject(value) && keys.every(match);
    });
}

export default isStructure;
