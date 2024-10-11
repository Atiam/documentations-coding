// WRITE YOUR CODE HERE
//* It's done when the total number of elements in the array is logged to the console.

//* It's done when the message "Welcome to the class, STUDENT_NAME" is logged using each element in the array.

//* It's done when the first element in the array is replaced with the name of a new student.

//* It's done when, after an `if` statement confirms that the first element in the array has been replaced, the message "REPLACED_NAME is in class" is logged.

//## 💡 Hints

//What is the first index in an array: `0` or `1`?



//The list of students
let students_list = ["Arnaud", "Andreu", "Martial", "Paul", "Guy"];


//To list the total number of the array 
console.log(students_list.length);




for (let i = 0 ; i < students_list.length; i++){
    console.log(`welcome to the class, ${students_list[i]}.`);
}


//Replace the first element of the array with the name of a new student

students_list[0] = "Tiam";

for (let i = 0 ; i < students_list.length; i++){
    console.log(`test: welcome to the class, ${students_list[i]}.`);
}

if (students_list[1] != "Arnaud"){
    console.log(`The name of the first student on the list has been replaced with the name, ${students_list[0]}.`);
}

else (`The name of the first student on the list has not been replaced.`)