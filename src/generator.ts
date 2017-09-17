import {generatorFunctionConstructor} from './utils/generatorFunctionConstructor';
import {setDescription} from "./utils/description";

/**
 * Checks whether a value is generator
 *
 * @example
 * is.generator(function* gen() {}); // true
 * is.generator(function(){})); // false
 *
 * @param {*} value
 * @returns {boolean}
 */
export default function isGenerator(value: any): boolean {
    return !!generatorFunctionConstructor && value instanceof generatorFunctionConstructor;
}

setDescription(isGenerator, 'a generator');