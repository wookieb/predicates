import {setDescription} from './utils/description';

/**
 * Checks whether a value is undefined
 *
 * @example
 * is.undefined(undefined); // true
 * is.undefined(0); // false
 */
function isUndefined(value: any): value is undefined {
    return typeof value === 'undefined';
}

setDescription(isUndefined, 'undefined');

export default isUndefined;
