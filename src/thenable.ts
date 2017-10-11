/**
 * Checks whether value is thenable according to Promise A+ spec https://promisesaplus.com/
 * Useful to asses whether value might be used as promise.
 *
 * **Type guard:** value is {then: (a: Function, b?: Function) => any}
 *
 * @example
 *
 * is.thenable(Promise.resolve('test')); // true
 * is.thenable({then: () => {}}); // this is still a thenable (according to spec)
 * is.thenable({}); // false
 *
 * @param {*} value
 * @returns {boolean}
 */
import {setDescription} from './utils/description';

export default function isThenable(value: any): value is { then: (a: Function, b?: Function) => any } {
    return !!value && typeof value.then === 'function';
}

setDescription(isThenable, 'a thenable object');