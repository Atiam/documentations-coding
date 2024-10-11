// Comments show the vanilla JavaScript equivalent statements

// const rootEl = document.getElementById("root");
// const rootEL = document.getElementById("root");
// const rootEl = $(`#root`);
const rootEl = $('#root');

// const titleEl = document.createElement("h1");
// const titleEl = document.createElement("h1");
// const titleEl = $(`<h1>`); 
const titleEl = $('<h1>');

// titleEl.textContent = "Hello friends";
// titleEl.textContent = "Hello friends";
// titleEl.textContent("Hello friends");
titleEl.text('Hello friends');

// titleEl.className = 'fancy';
// titleEl.attr(`class`,`fancy`)
titleEl.attr('class', 'fancy');

// titleEl.classList.add('p-5') - (`p-5` is for padding)
titleEl.addClass('p-5');

// titleEl.style.border = "rgb(122, 242, 242) 3px solid";
titleEl.css('border', 'rgb(122, 242, 242) 5px solid');

// rootEl.appendChild(titleEl);
rootEl.append(titleEl);

// titleEl.append("Welcome to jQuery");
rootEl.append('<h2>With jQuery we can:</h2>');

const abilities = [
  'Select',
  'Create',
  'Style',
  'Animate',
  'Traverse',
  'Event Listen',
  'much more',
];

// ? We use a `for...of` loop here because it's a little less code than a traditional `for` loop. We also don't need to use an index variable like `i` in this case.
for (const ability of abilities) {
  // Create a new `<li>` for each ability and its text content
  const abilityEl = $('<li>');

  // abilityEl.textContent = ability;
  abilityEl.text(ability);

  // `my-3` class adds margin on top and bottom
  abilityEl.addClass('my-3');

  // Alternatively
  // const abilityEl = $(`<li>${ability}</li>`);

  // Add this new `<li>` to the `<div>` root element.
  rootEl.append(abilityEl);
}

// select all `<li>` elements on the page
// document.querySelectorAll('li');
console.log($('li'));

// Alternatively use the `$.each` method
// $.each(abilities, function(i, ability) {
//    rootEl.append(`<li>${ability}</li>`);
// })
