"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function car(year, make, model) {
    if (year === void 0) { year = 3; }
    if (make === void 0) { make = "Mazda"; }
    if (!model) {
        return year + ' ' + make;
    }
    return year + ' ' + make + ' ' + model;
}
var mazda = car(1995, "Mazda", "Rx-7");
console.log(mazda);
var toyota = car(2020, "Toyota");
console.log(toyota);
