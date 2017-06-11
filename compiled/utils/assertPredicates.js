"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const function_1 = require("../function");
const arrayOf_1 = require("../arrayOf");
function assertPredicates(predicates) {
    if (!arrayOf_1.default(function_1.default, predicates)) {
        throw new TypeError('Every predicate must be a function');
    }
    if (predicates.length < 2) {
        throw new Error('You need to provide at least two predicates');
    }
}
exports.default = assertPredicates;
