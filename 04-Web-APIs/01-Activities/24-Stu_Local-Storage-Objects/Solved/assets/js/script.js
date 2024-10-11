const firstNameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const signUpButton = document.querySelector('#sign-up');

signUpButton.addEventListener('click', function (event) {
  event.preventDefault();

  // create user object from submission
  const user = {
    firstName: firstNameInput.value.trim(),
    lastName: lastNameInput.value.trim(),
    email: emailInput.value.trim(),
    password: passwordInput.value.trim(),
  };

  // set new submission to local storage
  localStorage.setItem('user', JSON.stringify(user));
});



// const usernameInput = document.querySelector('#username');
// const titleInput = document.querySelector('#title');
// const contentInput = document.querySelector('#content');
// const sumitButton = document.querySelector('#sumit');

// //add even handler on the submit button to prevent the default behavior , which is reloading the page.
// sumitButton.addEventListener('click', function (event) {
//   event.preventDefault();

//   // create user object from submission
//   const user = {
//     username: usernameInput.value.trim(),
//     title: titleInput.value.trim(),
//     content: contentInput.value.trim(),
//   };

//    // set new submission to local storage
//    localStorage.setItem('user', JSON.stringify(user));
//   });
  
