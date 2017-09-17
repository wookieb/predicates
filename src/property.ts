import {Predicate} from './types';
import handleCurry from './utils/handleCurry';
import isObject from './object';
import isFunction from './function';
import {getDescription, setDescription} from "./utils/description";


/**
 * Checks whether a value of given property of an object satisfies a predicate
 *
 * If you need to check more properties at a time use {@link structure}.
 *
 * NOTE! Provided predicate will be called ALWAYS if a provided value is an object.
 *
 * @example
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
function property(propertyName: string | Symbol, predicate: Predicate): Predicate;
function property(propertyName: string | Symbol, predicate: Predicate, object: Object, ...extraParams: any[]): boolean;
function property(propertyName: string | Symbol, predicate: Predicate, object?: Object): boolean | Predicate {
    if (arguments.length < 2) {
        throw new Error('Too few arguments - 2 required');
    }

    if (!isFunction(predicate)) {
        throw new TypeError('Predicate is not a function');
    }

    return handleCurry.call(this, arguments,
        setDescription(
            function isPropertySatisfiesPredicateTest(value: any) {
                const args = Array.prototype.slice.call(arguments);
                // conersion to string is necessary until https://github.com/Microsoft/TypeScript/issues/1863 gets fixed
                args.splice(0, 1, isObject(value) ? value[<string>propertyName] : undefined);
                return isObject(value) && predicate.apply(this, args);
            },
            'an object with property "' + propertyName + '" of type: ' + getDescription(predicate)
        ),
        2);
}

export default property;