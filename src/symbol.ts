/**
 * Checks whether value is Set
 *
 * @param {*} value
 * @returns {boolean}
 */
import {setDescription} from "./utils/description";

export default function isSymbol(value: any): value is Symbol {
    return typeof value === 'symbol';
}

setDescription(isSymbol, 'a Symbol');