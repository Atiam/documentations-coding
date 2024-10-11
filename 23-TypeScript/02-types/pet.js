"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var petName = "Mr. Pants";
var petType = "cat";
var petAge = 10;
var isSleeping = true;
var nextYearAge = petAge + 1;
var petGreeting = "".concat(petName, " is a ").concat(petType, ". Next year ").concat(petName, " will be ").concat(nextYearAge, " years old.");
if (isSleeping) {
    isSleeping = 8;
}
var sleepingStatus = "".concat(petName, " has been sleeping for ").concat(isSleeping, " hours.");
console.log(petGreeting);
console.log(sleepingStatus);
