"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.range = void 0;
function* range(startEnd, maybeEnd, step = 1) {
    let start = 0;
    let end = startEnd;
    if (maybeEnd !== undefined) {
        end = maybeEnd;
        start = startEnd;
    }
    for (let i = start; i < end; i += step) {
        yield i;
    }
}
exports.range = range;
//# sourceMappingURL=range.js.map