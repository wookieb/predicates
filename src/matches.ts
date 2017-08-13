import {Predicate} from './types';
import handleCurry from './utils/handleCurry';
import isRegexp from './regexp';
import {setDescription} from "./utils/description";

function matches(regexp: RegExp): Predicate;
function matches(regexp: RegExp, value: any): boolean;

/**
 * Checks whether a value matches a regexp
 *
 * **Aliases** _match_
 *
 * @function matches
 *
 * @example
 * var is = require('predicates');
 *
 * var isWindows9x = is.matches(/^Windows 9/);
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
function matches(regexp: RegExp, value?: any): boolean | Predicate {
    if (!isRegexp(regexp)) {
        throw new TypeError('Regexp must be a RegExp object');
    }

    return handleCurry.call(this, arguments,
        setDescription(
            (value: any) => regexp.test(value),
            'matches regexp ' + regexp
        )
    );
}

export default matches;
