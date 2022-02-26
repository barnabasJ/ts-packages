"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniq = void 0;
function* uniq(collection) {
    const seen = new Set();
    for (const v of collection) {
        if (!seen.has(v)) {
            seen.add(v);
            yield v;
        }
    }
}
exports.uniq = uniq;
//# sourceMappingURL=uniq.js.map