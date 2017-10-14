import {Predicate} from './types';
import {getDescription} from './utils/description';
import {getPredicateForType} from './typeToPredicate';

/**
 * Asserts that value satisfies given predicate, otherwise throws a given error with provided message
 *
 * @example
 *
 * // if no message provided then description of the predicate will be taken
 * is.assert(is.string)(null) // Error('Assertion failed. Must be a string')
 *
 * // simple types are mapped to predicates so they get the same description
 * is.assert(String)(null) // Error('Assertion failed. Must be a string')
 *
 * is.assert(String)('string') // undefined - everything is fine
 * is.assert(is.not(is.empty), 'Value is required')(''); // Error('Value is required')
 *
 * // custom error class allowed
 * is.assert(String, undefined, CustomErrorClass)(null); // CustomErrorClass('Assertion failed. Must be a string');
 */
export function assert(predicate: (Predicate | Function), message?: string, exceptionClass: { new (message: string): any } = Error) {
    predicate = getPredicateForType(predicate) || <Predicate>predicate;
    return function (value: any, ...extraArgs: any[]) {
        if (!(<Predicate>predicate)(value, ...extraArgs)) {
            throw new exceptionClass(message || 'Assertion failed. Must be ' + getDescription(<Predicate>predicate));
        }
    };
}