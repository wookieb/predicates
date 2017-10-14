import {asyncFunctionConstructor} from './utils/asyncFunctionConstructor';
import {setDescription} from './utils/description';

/**
 * Checks whether value is async function.
 * Only functions created with modifier "async" are considered async.
 * Regular function that returns promise or accepts callback is not an async function.
 *
 * More info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction
 *
 * @example
 * is.asyncFunction(async () => {}); // true
 * is.asyncFunction(function* () {}); // false
 * is.asyncFunction(function() {}); // false
 */
export default function isAsyncFunction<T = any>(value: any): value is (...args: any[]) => Promise<T> {
    return !!asyncFunctionConstructor && value instanceof asyncFunctionConstructor;
}

setDescription(isAsyncFunction, 'an async function');