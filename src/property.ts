import {Predicate} from './types';
import handleCurry from './utils/handleCurry';
import isObject from './object';
import isFunction from './function';
import {getDescription, setDescription} from './utils/description';
import {getPredicateForType} from './typeToPredicate';
import isSymbol from './symbol';
import isString from './string';


/**
 * Checks whether a value of given property of an object satisfies a predicate
 *
 * If you need to check more properties at a time use {@link structure}.
 *
 * @example
 * is.property('name', is.string, {name: 'Tommy'}); // true
 * is.property('name', is.string)({name: 'Tommy'}); // true
 * is.property('name', is.string, {name: 2}); // false - since 2 is not a string
 * is.property('name', is.string, {}); // false - since undefined is not a string
 *
 * @throws {TypeError} if predicate is not a function
 * @throws {Error} if too few arguments provided
 * @throws {TypeError} is property name is not a string or a symbol
 */
function property(propertyName: string | Symbol, predicate: Predicate | Function): Predicate;
function property(propertyName: string | Symbol, predicate: Predicate | Function, object: Object, ...extraParams: any[]): boolean;
function property(propertyName: string | Symbol, predicate: Predicate | Function, object?: Object): boolean | Predicate {

    if (!isSymbol(propertyName) && !isString(propertyName)) {
        throw new TypeError('Property must be a string or a symbol');
    }

    if (arguments.length < 2) {
        throw new Error('Too few arguments - 2 required');
    }

    if (!isFunction(predicate)) {
        throw new TypeError('Predicate is not a function');
    }

    predicate = getPredicateForType(predicate) || predicate;
    return handleCurry.call(this, arguments,
        setDescription(
            function isPropertySatisfiesPredicateTest(value: any) {
                const args = Array.prototype.slice.call(arguments);
                // conersion to string is necessary until https://github.com/Microsoft/TypeScript/issues/1863 gets fixed
                args.splice(0, 1, isObject(value) ? value[<string>propertyName] : undefined);
                return isObject(value) && predicate.apply(this, args);
            },
            'an object with property ' + (isSymbol(propertyName) ? propertyName.toString() : '"' + propertyName + '"') +
            ' of type: ' + getDescription(<Predicate>predicate)
        ), 2);
}

export default property;