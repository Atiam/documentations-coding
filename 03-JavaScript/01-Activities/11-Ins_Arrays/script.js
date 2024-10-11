// So far, we have been storing one piece of data in variables
const name = "Andre";
const pets = 3;
const isStudent = true;

// To store groups of data in a single variable, we use arrays
const names = ["Andre", "Karl", "Rashida", "Olivia"];

// The entire array can be accessed by using the array's name
console.log(names);

// To log a single element, we use the name of the array with the index in brackets
console.log(names[1]);

// Arrays are zero-indexed, so the index of first element in the array is 0
console.log(names[0]);

// We can also use index to replace data in an array
// Returns "Olivia"
console.log(names[3]);

//Replaces "Olivia" with "Carter"
names[3] = "Carter";

// Logs "The fourth name is Carter."
console.log(`The fourth name is ${names[3]}.`);

// We use the array's length property to determine how many elements are in the array
console.log(`The length of the array is ${names.length}.`);

// Additional

console.log(`test: The last name in the array is ${names[names.length -1]}`);

console.log(`The first name in the array is ${names[0]}.`);

console.log(`Here is the list of all name in the array ${names}`);

console.log(`Here is the second name in the array ${names[1]}`);
console.log(`Here is the third name in the array: ${names[2]}`);
console.log(`Here is the last name in the array ${names[names.length -1]}.`);
