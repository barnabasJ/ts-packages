"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sort = void 0;
const index_1 = require("./index");
function sort(collection, compareFn) {
    const arr = (0, index_1.takeAll)(collection);
    return arr.sort(compareFn);
}
exports.sort = sort;
//# sourceMappingURL=sort.js.map