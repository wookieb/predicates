'use strict';

module.exports = function handleCurry(args, func, valueIndex) {
    valueIndex = valueIndex || 1;
    return args.length > valueIndex ? func.apply(this, Array.prototype.slice.call(args, valueIndex)) : func;
};
