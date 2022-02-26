"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = void 0;
function* map(collection, fn) {
    for (const n of collection) {
        yield fn(n);
    }
}
exports.map = map;
//# sourceMappingURL=map.js.map