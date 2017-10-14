import {Predicate} from './types';
import assertPredicates from './utils/assertPredicates';
import {getDescription, setDescription} from './utils/description';
import {getPredicateForType} from './typeToPredicate';

/**
 * Returns a function that calls predicates and returns true if all of them are satisfied, otherwise returns false
 *

 *
 * @example
 * const isBetween10And100 = is.all(is.greaterThan(10), is.lessThan(100));
 *
 * isBetween10And100(0); // false
 * isBetween10And100(11); // true
 *
 * @throws {TypeError} if not every predicate is a function
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