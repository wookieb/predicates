import {asyncFunctionConstructor} from './utils/asyncFunctionConstructor';

/**
 * Checks whether value is async function.
 * Only functions created with modifier "async" are considered async.
 * Regular function that returns promise or accepts callback is not async function.
 *
 * More info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction
 *
 * @param {*} value
 * @returns {boolean}
 */
export default function isAsyncFunction(value: any): boolean {
    return !!asyncFunctionConstructor && value instanceof asyncFunctionConstructor;
}