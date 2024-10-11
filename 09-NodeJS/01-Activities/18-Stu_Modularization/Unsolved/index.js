
module.exports = {
    sum: (a, b) => a + b,
    difference: (a, b) => a - b,
    product: (a, b) => a * b,
    quotient: (a, b) => a / b,
  };
  

// {sum, difference, product, quotient}
// TODO: Import `basicmath.js`
const basicmath = require("./basicmath.js");

// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`

const {sum, difference, product, quotient} = basicmath;
// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`
