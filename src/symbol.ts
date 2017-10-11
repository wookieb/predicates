import {setDescription} from './utils/description';

/**
 * Checks whether value is Set
 *
 * **Type guard:** value is Symbol
 *
 * @example
 * is.symbol(Symbol('test')); // true
 * is.symbol('test'); // false
 *
 * @param {*} value
 * @returns {boolean}
 */
export default function isSymbol(value: any): value is Symbol {
    return typeof value === 'symbol';
}

setDescription(isSymbol, 'a Symbol');