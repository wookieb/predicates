'use strict';

module.exports = function handleCurry(args, func) {
    return args.length > 1 ? func.apply(this, Array.prototype.slice.call(args, 1)) : func;
};
