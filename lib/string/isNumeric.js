"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumeric = (input) => {
    if (typeof input == 'number')
        return true;
    if (typeof input != 'string')
        return false;
    return !isNaN(input) &&
        !isNaN(parseFloat(input));
};
