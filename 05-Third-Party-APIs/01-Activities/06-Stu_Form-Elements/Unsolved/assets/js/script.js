const shoppingFormEl = $('#shopping-form');
const shoppingListEl = $('#shopping-list');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
function shopping(){ const shippingItem = shoppingFormEl.children.ep(0).value;
const liEl = $(`<li>`);
liEl.text(shippingItem);
shoppingListEl.append(liEl);
}


// TODO: Add an event listener to the `shoppingFormEl` to handle submission

shoppingFormEl.on(`click`, shopping);