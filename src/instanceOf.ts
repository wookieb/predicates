import {Predicate} from './types';
import handleCurry from './utils/handleCurry';
import isFunction from './function';
import {setDescription} from "./utils/description";


/**
 * Checks whether a value is an instance of given "class"
 *
 * **Aliases** _instance_
 *
 * @function instanceOf
 *
 * @example
 * var is = require('predicates');
 *
 * var Duck = function() {};
 * var Car = function() {};
 *
 * var isDuck = is.instanceOf(Duck);
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
function isInstanceOf(clazz: Function): Predicate;
function isInstanceOf(clazz: Function, value: any): boolean;
function isInstanceOf(clazz: Function, value?: any): boolean | Predicate {
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
