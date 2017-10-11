import {Predicate} from './types';
import assertPredicates from './utils/assertPredicates';
import {getDescription, setDescription} from './utils/description';
import {getPredicateForType} from './typeToPredicate';

/**
 * Returns a function that calls predicates in the order until one of them will be satisfied, otherwise returns false.
 *
 * **Type guard:** _none_
 *
 * @example
 * const isStringOrNumber = is.any(is.string, is.number);
 *
 * isStringOrNumber(0); // true
 * isStringOrNumber('string'); // true
 * isStringOrNumber(undefined); // false
 *
 * @param {...Predicate|Function} predicates or simple types constructors
 * @throws {TypeError} if not every predicate is a function
 * @returns {Predicate}
 */
export default function any(...predicates: (Predicate | Function)[]): Predicate {
    const convertedPredicates = predicates.map((p) => getPredicateForType(p) || <Predicate>p);
    assertPredicates(convertedPredicates);

    return setDescription(
        function anyPredicate() {
            const args = arguments;
            return convertedPredicates.some(predicate => predicate.apply(this, args));
        },
        'a value that satisfies any of predicates: ' + (convertedPredicates.map(getDescription)).join(', ')
    );
}