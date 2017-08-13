/**
 * Checks whether value is Set
 *
 * @param {*} value
 * @returns {boolean}
 */
import {setDescription} from "./utils/description";

export default function isSet(value: any): boolean {
    return typeof Set !== 'undefined' && value instanceof Set;
}
setDescription(isSet, 'a Set');