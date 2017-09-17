import {Predicate} from './types';
import assertPredicates from './utils/assertPredicates';
import {getDescription, setDescription} from "./utils/description";

/**
 * Returns a function that calls predicates in the order until one of them will be satisfied, otherwise returns false.
 *
 * @example
 * const isStringOrNumber = is.any(is.string, is.number);
 *
 * isStringOrNumber(0); // true
 * isStringOrNumber('string'); // true
 * isStringOrNumber(undefined); // false
 *
 * @param {...Predicate} predicates
 * @throws {TypeError} if not every predicate is a function
 * @returns {Predicate}
 */
export default function any(...predicates: Predicate[]): Predicate {
    assertPredicates(predicates);

    return setDescription(
        function anyPredicate() {
            const args = arguments;
            return predicates.some(predicate => predicate.apply(this, args));
        },
        'a value that satisfies any of predicates: ' + (predicates.map(getDescription)).join(', ')
    );
}