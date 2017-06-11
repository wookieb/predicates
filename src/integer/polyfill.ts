import isFinitePredicate from '../finite';

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
function isIntegerPolyfill(value: any): boolean {
    return isFinitePredicate(value) && value > -9007199254740992 && value < 9007199254740992 && Math.floor(value) === value;
}

export default isIntegerPolyfill;