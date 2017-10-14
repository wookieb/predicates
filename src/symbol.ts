import {setDescription} from './utils/description';

/**
 * Checks whether value is Set
 *
 * @example
 * is.symbol(Symbol('test')); // true
 * is.symbol('test'); // false
 */
export default function isSymbol(value: any): value is Symbol {
    return typeof value === 'symbol';
}

setDescription(isSymbol, 'a Symbol');