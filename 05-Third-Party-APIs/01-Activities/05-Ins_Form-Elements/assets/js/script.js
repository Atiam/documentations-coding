const formEl = $('#pizza-form');
const firstNameEl = $('input[name="first-name"]');
const lastNameEl = $('input[name="last-name"]');
const emailEl = $('input[name="email"]');
const githubEl = $('input[name="github"]');

function handleFormSubmit(event) {
  // Prevent the default behavior
  event.preventDefault();

  console.log('First Name:', firstNameEl.val());
  console.log('Last Name:', lastNameEl.val());
  console.log('Email:', emailEl.val());
  console.log('GitHub:', githubEl.val());

  // Select all checked options
  const checkedEl = $('input:checked');
  const selected = [];

  // Loop through checked options to store in array
  $.each(checkedEl, function () {
    selected.push($(this).val());
  });
  console.log('Toppings: ', selected.join(', '));

  // Clear input fields
  $('input[type="text"]').val('');
  $('input[type="email"]').val('');
  $('input[type="checkbox"]').prop('checked', false);
}

// Submit event on the form
formEl.on('submit', handleFormSubmit);
