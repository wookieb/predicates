import {Predicate} from './types';
import isString from './string';
import isObject from './object';
import handleCurry from './utils/handleCurry';
import {setDescription} from "./utils/description";

/**
 * Checks whether an object has a given property
 *
 * @example
 * const isDuck = is.hasProperty('quack');
 *
 * isDuck({quack: ':)'}); // true
 * // same as
 * is.hasProperty('quack', {quack: ':)'}); // true
 *
 * isDuck({type: 'car'}); // false
 *
 * @param {string|Symbol} property
 * @param {Object} [object]
 * @throws {TypeError} if property is not a string
 * @returns {(boolean|Predicate)} bool if at least two arguments provided, otherwise a predicate
 */
function hasProperty(property: string | Symbol): Predicate;
function hasProperty(property: string | Symbol, object: Object): boolean;
function hasProperty(property: string | Symbol, object?: Object): boolean | Predicate {
    if (!isString(property)) {
        throw new TypeError('Property name must be a string');
    }
    return handleCurry.call(this, arguments,
        setDescription(
            (object: object) => {
                return isObject(object) && property in object;
            },
            'an object with "' + property + '" property'
        )
    );
}

export default hasProperty;