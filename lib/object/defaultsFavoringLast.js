"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultsFavoringLast = (objects, qualifyValue = (v) => !!v) => {
    const items = objects.filter(x => typeof x === 'object');
    const entries = [].concat(...items.map(Object.entries));
    return entries.reduce((previous, [key, value]) => {
        previous[key] = qualifyValue(value) ? value : previous[key];
        return previous;
    }, {});
};
