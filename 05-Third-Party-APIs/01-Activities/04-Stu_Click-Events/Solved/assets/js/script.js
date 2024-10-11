// Use the correct selector `#` to select a button by its ID and not class
const passwordBtnEl = $('#password-btn');
const passwordDisplayEl = $('#password-display');

// Function returns a random character that includes alphanumeric and special character values
function getPasswordCharacter() {
  return String.fromCharCode(Math.floor(Math.random() * 77) + 34);
}

// Function returns a string of concatenated characters of length num
function passwordGenerator(num) {
  let password = '';
  for (let i = 0; i < num; i++) {
    password += getPasswordCharacter();
  }
  return password;
}

// Change the event listener to `click` to make the event trigger on single-click
passwordBtnEl.on('click', function () {
  const newPassword = passwordGenerator(15);
  passwordDisplayEl.text(newPassword);
});
