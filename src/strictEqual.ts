import {TypeGuardPredicate} from './types';
import handleCurry from './utils/handleCurry';
import {setDescription} from './utils/description';


/**
 * Checks whether a value is strictly equal to expected value (uses === operator)
 *
 * @example
 * const mom = {};
 * const isMyMom = is.strictEqual(mom);
 *
 * isMyMom(mom); // true - mom is only one. Remember about it...
 * // same as
 * is.strictEqual(mom, mom); // true
 * isMyMom({}); // false
 */
function isStrictEqual<T = any>(expected: T): TypeGuardPredicate<T>;
function isStrictEqual<T = any>(expected: T, value: any): value is T;
function isStrictEqual<T = any>(expected: T, value?: any): boolean | TypeGuardPredicate<T> {
    return handleCurry.call(this, arguments,
        setDescription(
            (value: any) => expected === value,
            'strictly equal to ' + JSON.stringify(expected)
        )
    );
}

export default isStrictEqual;
