import {setDescription} from "./utils/description";

/**
 * Check whether value is Map
 *
 * @param {*} value
 * @returns {boolean}
 */
export default function isMap(value: any): boolean {
    return typeof Map !== 'undefined' && value instanceof Map;
}

setDescription(isMap, 'a Map');