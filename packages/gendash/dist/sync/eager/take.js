"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.take = void 0;
function take(collection, n) {
    const iter = collection[Symbol.iterator]();
    const res = [];
    for (let i = 0; i < n; ++i) {
        const { value, done } = iter.next();
        if (done)
            return res;
        res.push(value);
    }
    return res;
}
exports.take = take;
//# sourceMappingURL=take.js.map