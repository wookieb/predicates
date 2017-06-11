import isNumber from '../number';

export default function isFinitePolyfill(value: any): boolean {
    return isNumber(value) && value !== Infinity && value !== -Infinity && !isNaN(value);
}