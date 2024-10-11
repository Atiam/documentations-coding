"use strict";
// Add appropriate access modifier to:
// animalName in Animal: public, private, or protected 
// meowSound in Cat: public, private, or protected 
// Create Dog derived/extended class with a dogSound variable and a method of bark() that uses it
// Create a dog instance and Call the new dog class' sound method
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.animalName = name;
    }
    Animal.prototype.move = function () {
        console.log("".concat(this.animalName, " Moves"));
    };
    Animal.prototype.eat = function () {
        console.log("".concat(this.animalName, " eats."));
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(animalName) {
        var _this = _super.call(this, animalName) || this;
        _this.meowSound = "meeooww";
        return _this;
    }
    Cat.prototype.meow = function () {
        console.log("".concat(this.animalName, " says ").concat(this.meowSound));
    };
    return Cat;
}(Animal));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(animalName) {
        var _this = _super.call(this, animalName) || this;
        _this.barkSound = "woof";
        return _this;
    }
    Dog.prototype.bark = function () {
        console.log("".concat(this.animalName, " says ").concat(this.barkSound));
    };
    return Dog;
}(Animal));
var mrPants = new Cat("Mr.Pants");
mrPants.eat();
mrPants.meow();
var mrPants02 = new Dog("Mr.Pants02");
mrPants02.bark();
