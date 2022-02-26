"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toList = void 0;
function* toList(collection) {
    const keys = Object.keys(collection);
    for (const key of keys) {
        console.log({ key, value: collection[key] });
        // @ts-expect-error
        yield [key, collection[key]];
    }
}
exports.toList = toList;
//# sourceMappingURL=to-list.js.map