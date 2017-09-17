import {Predicate, TypeGuardPredicate} from './types';
import handleCurry from './utils/handleCurry';
import isFunction from './function';
import {setDescription} from "./utils/description";


/**
 * Checks whether a value is an instance of given "class"
 *
 * @example
 * const Duck = function() {};
 * const Car = function() {};
 *
 * const isDuck = is.instanceOf(Duck);
 *
 * isDuck(new Duck); // true
 * // same as
 * is.instanceOf(Duck, new Duck); // true
 *
 * isDuck(new Car); // false
 *
 *
 * @param {Function} clazz
 * @param {*} [value]
 * @throws {TypeError} if class is not a function
 * @returns {(boolean|Predicate)} bool if at least two arguments provided, otherwise a predicate
 */
function isInstanceOf<T>(clazz: Function): TypeGuardPredicate<T>;
function isInstanceOf<T>(clazz: Function, value: any): value is T;
function isInstanceOf<T>(clazz: Function, value?: any): boolean | TypeGuardPredicate<T> {
    if (!isFunction(clazz)) {
        throw new TypeError('Class must be a function');
    }
    return handleCurry.call(this, arguments,
        setDescription(
            (value: Function) => value instanceof clazz,
            'an instance of ' + clazz.name
        )
    );
}

export default isInstanceOf;


class Testerek {
    someProperty: string = null;
}

const t:any = {};


if (isInstanceOf<Testerek>(Testerek)(t)) {

}