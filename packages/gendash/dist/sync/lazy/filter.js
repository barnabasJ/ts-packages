"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = void 0;
function* filter(collection, predicate) {
    for (const e of collection) {
        if (predicate(e)) {
            yield e;
        }
    }
}
exports.filter = filter;
//# sourceMappingURL=filter.js.map