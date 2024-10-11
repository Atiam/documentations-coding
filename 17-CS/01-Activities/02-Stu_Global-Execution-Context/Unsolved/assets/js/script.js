// 1) Where is carNoise stored?
// Globlal execution context
const carNoise = 'Honk';
// 2) Where is goFast stored?
// Global execution context
const goFast = speed => {
  // 4) When is speed assigned a value? Where is this value stored?
  // Function execution context
  
  // 5) Where is makeNoise stored?
  // Fuction execution context
  const makeNoise = sound => {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  }

  // 6) What happens in the following statement?
  //  The global execution context as well as the local function execution context are accessible
  makeNoise(carNoise);
}

// 3) What happens in the following statement?
// Calling goFast, places it on the call stack which creates a new function execution context
if(confirm("Do you want to go fast?")) {
  goFast(80);
}
