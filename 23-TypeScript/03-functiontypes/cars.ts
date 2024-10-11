
// Convert js to ts, then add "export { }" to top
//Set appropriate types for parameters, optional parameter and return type. 
export { }

function car(year: number, make: string = "Mazda", model?: string): string {

    if (!model) {
        return year + ' ' + make;
    }

    return year + ' ' + make + ' ' + model;
}

const mazda: string = car(1995, "Mazda", "Rx-7");
console.log(mazda);

const toyota: string = car(2020, "Toyota");
console.log(toyota);



