// Avoid using arrow functions for object methods
const dog = {
  name: "Lassie",
  sound: "Woof!",
  makeSound: () => console.log(this.sound),
  readTag: () => console.log(`The dog's tag reads:  ${this.name}.`)
};

// Prints `undefined`
dog.makeSound();

// Prints `The dog's tag reads: undefined.`
dog.readTag();

// In the makeSound and readTag methods, `this` doesn't refer to `dog`
// If this code run in node, `this` refers to `module.exports` (the object containing all the exports in this file)
// If this code was run in the browser, `this` would refer to the window



// const dog2 = {
//   name: "Lassie",
//   sound: "Woof!",
//   makeSound: function() {console.log(this.sound)},
//   readTag: function() {console.log(`This dog's reads: ${this.name}`)}
// };

// dog2.makeSound();

// dog2.readTag();