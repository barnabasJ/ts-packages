"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduce = void 0;
function reduce(collection, fn, acc) {
    let result = acc;
    for (const v of collection) {
        result = fn(result, v);
    }
    return result;
}
exports.reduce = reduce;
//# sourceMappingURL=reduce.js.map