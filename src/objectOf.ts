import isObject from './object';
import isFunction from './function';
import handleCurry from './utils/handleCurry';
import {Predicate} from './types';
import {setDescription, getDescription} from "./utils/description";
import {getPredicateForType} from "./typeToPredicate";

/**
 * Checks whether every enumerable property of object satisfies a predicate
 *
 * @example
 * const isObjectOfStrings = is.objectOf(is.string);
 *
 * isObjectOfStrings({key: 'value', key1: 'value'}); // true
 * // same as
 * is.objectOf(is.string, {key: 'value', key1: 'value'}); // true
 *
 * isObjectOfStrings({key: 1, key1: 'value'}); // false
 *
 * @param {Predicate|Function} predicate or simple type constructor
 * @param {Object} [object]
 * @param {...*} [additionalArgs] additional arguments passed to the predicate
 * @returns {(boolean|Predicate)} returns bool if at least two arguments provided, otherwise a predicate
 */
function isObjectOf(predicate: Predicate | Function): Predicate;
function isObjectOf(predicate: Predicate | Function, value: Object): boolean;
function isObjectOf(predicate: Predicate | Function, value?: Object, ...extraArgs: any[]): boolean | Predicate {
    if (!isFunction(predicate)) {
        throw new TypeError('Predicate must be a function');
    }

    predicate = getPredicateForType(predicate) || predicate;

    return handleCurry.call(this, arguments,
        setDescription(function isObjectOfPredicate(object: Object, ...extraArgs: any[]) {
                return isObject(object) && Object.keys(object)
                    .every((key) => {
                        return predicate.apply(this, [(<any>object)[key]].concat(extraArgs));
                    });
            },
            'an object of elements of type: ' + getDescription(<Predicate>predicate)
        )
    );
}

export default isObjectOf;
