import isUndefined from './undefined';
import {setDescription} from './utils/description';

/**
 * Checks whether a value is not undefined - in other words, is defined
 *
 * @example
 * is.defined(''); // true
 * is.defined(1); // true
 * is.defined(undefined); // false
 *
 * @param value
 */
export default function isDefined(value: any): boolean {
    return !isUndefined(value);
}

setDescription(isDefined, 'defined');