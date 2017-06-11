import {generatorFunctionConstructor} from './utils/generatorFunctionConstructor';
/**
 * Checks whether a value is generator
 *
 * @param {*} value
 * @returns {boolean}
 */
export default function isGenerator(value: any): boolean {
    return !!generatorFunctionConstructor && value instanceof generatorFunctionConstructor;
}