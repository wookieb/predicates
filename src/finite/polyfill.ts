import isNumber = require('../number');

export = function isFinitePolyfill(value: any): boolean {
    return isNumber(value) && value !== Infinity && value !== -Infinity && !isNaN(value);
}