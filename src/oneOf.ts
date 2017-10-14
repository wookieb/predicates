import {Predicate} from './types';
import {setDescription} from './utils/description';

/**
 * Returns a function that checks whether a value is equal to one of allowed values
 * Function compares values using === operator
 *
 * @example
 * const isAllowedToAccess = is.oneOf('ROLE_ADMIN', 'ROLE_USER');
 * // same as
 * // const isAllowedToAccess = is.in(['ROLE_ADMIN', 'ROLE_USER']);
 *
 * isAllowedToAccess('ROLE_ADMIN'); // true
 * isAllowedToAccess('ROLE_ANONYMOUS'); // false
 *
 * @throws {Error} if 0 or 1 allowed value provided
 */
function isOneOf(...allowedValues: any[]): Predicate {
    if (allowedValues.length < 2) {
        throw new Error('At least 2 allowed values are required');
    }

    return setDescription(
        function isOneOfPredicate(value: any) {
            return allowedValues.indexOf(value) !== -1;
        },
        'one of values: ' + allowedValues.join(', ')
    );
}

export default isOneOf;