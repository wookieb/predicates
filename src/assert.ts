import {Predicate} from './types';
import {getDescription} from './utils/description';

/**
 * Assert that values satisfies given predicate
 *
 * @param {Predicate} predicate
 * @param {any} value
 * @param {Function} [exceptionClass=Error] error class to create on failed assertion
 * @param {string} [message] message to use instead default message generated from predicate description
 */
export default function assert(predicate: Predicate, value: any, exceptionClass: { new (message: string): any } = Error, message?: string) {
    if (!predicate(value)) {
        throw new exceptionClass(message || 'Assertion failed. Must be ' + getDescription(predicate));
    }
}