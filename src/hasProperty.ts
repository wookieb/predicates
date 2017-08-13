import {Predicate} from './types';
import isString from './string';
import isObject from './object';
import handleCurry from './utils/handleCurry';
import {setDescription} from "./utils/description";

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
 * @returns {(boolean|Predicate)} bool if at least two arguments provided, otherwise a predicate
 */
function hasProperty(property: string): Predicate;
function hasProperty(property: string, object: Object): boolean;
function hasProperty(property: string, object?: Object): boolean | Predicate {
    if (!isString(property)) {
        throw new TypeError('Property name must be a string');
    }
    return handleCurry.call(this, arguments,
        setDescription(
            (object: Object) => {
                return isObject(object) && property in object;
            },
            'an object with "' + property + '" property'
        )
    );
}

export default hasProperty;