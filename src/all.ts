import {Predicate} from './types';
import assertPredicates from './utils/assertPredicates';
import {getDescription, setDescription} from './utils/description';
import {getPredicateForType} from './typeToPredicate';

/**
 * Returns a function that calls predicates and returns true if all of them are satisfied, otherwise returns false
 *
 * **Type guard:** _none_
 *
 * @example
 * const isNumberGreaterThan10 = is.all(is.number, is.greaterThan(10));
 *
 * isNumberGreaterThan10(0); // false
 * isNumberGreaterThan10(11); // true
 * isNumberGreaterThan10('11'); // false
 *
 * @param {...Predicate|Function} predicates or simple types constructors
 * @throws {TypeError} if not every predicate is a function
 * @returns {Predicate}
 */
export default function all(...predicates: (Predicate | Function)[]): Predicate {
    const convertedPredicates = predicates.map((p) => getPredicateForType(p) || <Predicate>p);
    assertPredicates(convertedPredicates);

    return setDescription(
        function () {
            const args = arguments;
            return convertedPredicates.every(predicate => predicate.apply(this, args));
        },
        'a value that satisfies all predicates: ' + (convertedPredicates.map(getDescription)).join(', ')
    );
}