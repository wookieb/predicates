import {Predicate, TypeGuardPredicate} from './types';
import handleCurry from './utils/handleCurry';
import isRegexp from './regexp';
import {setDescription} from "./utils/description";
import isString from './string';


/**
 * Checks whether a value is a string and matches a regexp
 *
 * @example
 * const isWindows9x = is.matches(/^Windows 9/);
 *
 * isWindows9x('Windows 9'); // true - :D
 * // same as
 * is.matches(/^Windows 9/, 'Windows 9'); // also true - hue hue
 *
 * isWindows9x('Windows 10); // false
 *
 * @param {RegExp} regexp
 * @param {string} [value]
 * @throws {TypeError} if regexp is not a regexp
 * @returns {(boolean|Predicate)} bool if at least two arguments provided, otherwise a predicate
 */
function matches(regexp: RegExp): TypeGuardPredicate<string>;
function matches(regexp: RegExp, value: string): value is string;
function matches(regexp: RegExp, value?: string): boolean | TypeGuardPredicate<string> {
    if (!isRegexp(regexp)) {
        throw new TypeError('Regexp must be a RegExp object');
    }

    return handleCurry.call(this, arguments,
        setDescription(
            (value: string) => isString(value) && regexp.test(<string><any>value),
            'a string that matches regexp ' + regexp
        )
    );
}

export default matches;
