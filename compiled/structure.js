"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const object_1 = require("./object");
const handleCurry_1 = require("./utils/handleCurry");
const objectOf_1 = require("./objectOf");
const function_1 = require("./function");
const isObjectOfPredicates = objectOf_1.default(function_1.default);
function isStructure(structure, value, ...extraArgs) {
    if (!object_1.default(structure)) {
        throw new TypeError('Structure must be an object');
    }
    const keys = Object.keys(structure);
    if (keys.length === 0) {
        throw new Error('Structure object cannot be empty. No enumerable properties found');
    }
    if (!isObjectOfPredicates(structure)) {
        throw new TypeError('Structure object must consist of predicates');
    }
    return handleCurry_1.default.call(this, arguments, function isStructurePredicate(value) {
        const match = (key) => structure[key].apply(this, [value[key]].concat(extraArgs));
        return object_1.default(value) && keys.every(match);
    });
}
exports.default = isStructure;
