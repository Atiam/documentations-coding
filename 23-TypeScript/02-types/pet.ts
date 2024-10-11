
// Convert js to ts, then add "export { }" to top
// assign let/const and Basic types
// Yypes = boolean, number, string, any, unknown, null
// Basic Types: let {varname}: {type} = {value};
// Union Types: let {varname}: {type} | {type} = {value};
export { }

const petName: string = "Mr. Pants";
const petType: string = "cat";
const petAge: number = 10;
let isSleeping: any = true;
const nextYearAge: number = petAge + 1;

const petGreeting: string = `${petName} is a ${petType}. Next year ${petName} will be ${nextYearAge} years old.`;

if (isSleeping) {
    isSleeping = 8;
}

const sleepingStatus: string = `${petName} has been sleeping for ${isSleeping} hours.`;

console.log(petGreeting);
console.log(sleepingStatus);



