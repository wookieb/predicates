import isObject from './object';
import isString from './string';
import handleCurry from './utils/handleCurry';
import {Predicate} from './types';
import {setDescription} from './utils/description';
import isSymbol from "./symbol";

/**
 * Checks whether an object has own property
 *
 * @example
 * const isCustomized = is.hasOwnProperty('delay');
 *
 * const Timer = function() {};
 * Timer.prototype.delay = 100;
 *
 * const timer1 = new Timer();
 * const timer2 = new Timer();
 * timer1.delay = 1000;
 *
 * isCustomized(timer1) // true
 * // same as
 * is.hasOwnProperty('delay', timer1); // true
 *
 * isCustomized(timer2); // false
 *
 * @throws {TypeError} if property is not a string or a symbol
 */
function hasOwnProperty(property: string | Symbol): Predicate ;
function hasOwnProperty(property: string | Symbol, object: object): boolean;
function hasOwnProperty(property: string | Symbol, object?: object): boolean | Predicate {
    if (!isString(property) && !isSymbol(property)) {
        throw new TypeError('Property name must be a string');
    }
    return handleCurry.call(this, arguments,
        setDescription(
            (object: object) => {
                return isObject(object) && Object.prototype.hasOwnProperty.call(object, property);
            },
            'an object with own ' + (isSymbol(property) ? property.toString() : '"'+property+'"') + ' property'
        )
    );
}

export default hasOwnProperty;