import {Predicate} from './types';
import assertPredicates from './utils/assertPredicates';
import {getDescription, setDescription} from "./utils/description";

/**
 * Returns a function that calls predicates and returns true if all of them are satisfied, otherwise returns false
 *
 * @example
 * const isNumberGreaterThan10 = is.all(is.number, is.greaterThan(10));
 *
 * isNumberGreaterThan10(0); // false
 * isNumberGreaterThan10(11); // true
 * isNumberGreaterThan10('11'); // false
 *
 * @param {...Predicate} predicates
 * @throws {TypeError} if not every predicate is a function
 * @returns {Predicate}
 */
export default function all(...predicates: Predicate[]): Predicate {
    assertPredicates(predicates);

    return setDescription(
        function () {
            const args = arguments;
            return predicates.every(predicate => predicate.apply(this, args));
        },
        'a value that satisfies all predicates: ' + (predicates.map(getDescription)).join(', ')
    );
}