import {Predicate} from './types';
import isObject from './object';
import handleCurry from './utils/handleCurry';
import objectOf from './objectOf';
import isFunction from './function';
import {getDescription, setDescription} from './utils/description';
import {getPredicateForType} from './typeToPredicate';

const isObjectOfPredicates = objectOf(isFunction);

/**
 * Checks whether an object satisfies predicates defined in structure
 *
 * NOTE: All predicates defined in structure must be satisfied.
 * If some of the properties are optional use [undefinedOr](#undefinedOr)
 *
 * You shouldn't use this function to validate input from the user and expect complex report of what is invalid.
 * There are few reasons for that:
 * * it's just a predicate (that always returns only true or false)
 * * breaks [the design rule](design.md#user-content-defined-and-generated-predicates-will-not-throw-any-errors)
 *
 * See examples for inspiration how you can use _structure_
 *
 * @example <caption>Structure check</caption>
 * const schema = {
 *      name: String, // only string
 *      phone: is.or(String, Number), // string or number
 *      surname: is.undefinedOr(String) // optional
 * },
 *     isPerson = is.structure(schema);
 *
 * const person = {name: 'Tommy', phone: 80129292};
 * isPerson(person); // true
 * // same as
 * is.structure(schema, person); // true
 * isPerson({name: 'Tommy'});
 *
 * @example <caption>filtering</caption>
 * const people = [
 *  {name: 'Prof. Bend Ovah', age: 55, sex: 'male'},
 *  {name: 'Dr. Supa Kaki', age: 34, sex: 'female'},
 *  {name: 'Prof. Anti Santy', age: 46, sex: 'male'}
 * ];
 *
 * const professors = people.filter(is.structure({
 *  name: is.startsWith('Prof.')
 * }));
 *
 * // [
 * //   {name: 'Prof. Bend Ovah', age: 55, sex: 'male'},
 * //   {name: 'Prof. Anti Santy', age: 46, sex: 'male'}
 * // ]
 *
 * @example <caption>duck typing</caption>
 *
 * const isDuck = is.structure({
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
 * @throws {TypeError} if structure is not an object
 */
function isStructure(structure: { [name: string]: Predicate | Function }): Predicate;
function isStructure(structure: { [name: string]: Predicate | Function }, value: Object): boolean;
function isStructure(structure: { [name: string]: Predicate | Function }, value?: Object, ...extraArgs: any[]): boolean | Predicate {
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

    keys.forEach((key: string) => {
        structure[key] = getPredicateForType(structure[key]) || structure[key];
    });
    const structureDescription = keys
        .reduce((result, key) => {
            result.push(`"${key}" - ` + getDescription(<Predicate>structure[key]));
            return result;
        }, [])
        .join(', ');
    return handleCurry.call(this, arguments,
        setDescription(
            function isStructurePredicate(value: Object) {
                const match = (key: string) => structure[key].apply(this, [(<any>value)[key]].concat(extraArgs));
                return isObject(value) && !Array.isArray(value) && keys.every(match);
            },
            'an object with properties: ' + structureDescription
        )
    );
}

export default isStructure;
