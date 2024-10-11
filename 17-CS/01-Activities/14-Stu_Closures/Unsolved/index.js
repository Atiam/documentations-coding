// TODO: Complete the 'counter' function below.
function counter() {
    // Return a function that when invoked increments and returns a counter variable.
    let count = 0;
    return function() {
        count++;
        return count;
    }
}

module.exports = counter;
