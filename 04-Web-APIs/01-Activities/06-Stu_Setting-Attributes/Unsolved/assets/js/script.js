const site1El = document.querySelector('.site1');
const site2El = document.querySelector('.site2');
const site3El = document.querySelector('.site3');

site1El.children[0].textContent = 'Site 1';
site1El.children[1].setAttribute('href', 'https://google.com');
site1El.children[1].children[0].setAttribute(
  'src',
  'assets/images/image_1.jpg'
);
site1El.children[1].children[0].setAttribute('alt', 'man working');
site1El.children[1].children[0].setAttribute('style', 'padding:10px;');

site2El.children[0].textContent = 'Site 2';
site2El.children[1].setAttribute('href', 'https://twitter.com');
site2El.children[1].children[0].setAttribute(
  'src',
  'assets/images/image_2.jpg'
);
site2El.children[1].children[0].setAttribute('alt', 'group brainstorm');
site2El.children[1].children[0].setAttribute('style', 'padding:10px;');

site3El.children[0].textContent = 'Site 3';
site3El.children[1].setAttribute('href', 'https://instagram.com');
site3El.children[1].children[0].setAttribute(
  'src',
  'assets/images/image_3.jpg'
);
site3El.children[1].children[0].setAttribute('alt', 'women working');
site3El.children[1].children[0].setAttribute('style', 'padding:10px;');

// Write Your Code Below

// * It's done when all the `<h4>` elements are selected and stored in a single variable.

// * It's done when the text of each `<h4>` is set to `blue`, the font size is `30px`, and the text is `bold`.

// * It's done when the padding to the left of the title is set to `10px` and the margin is set to `0`.

// const headings = document.querySelectorAll(`h4`);
// for (let h4 in headings) {
//   h4.setAttribute("style", "font-size:30px", "color:blue", "font-weight:bold");
 

// }

document.querySelector("h1").style.paddingLeft = "10px;"
document.querySelector("h1").style.color = "blue;"

document.body.children[0].style.color = "blue;"

// const h1 = document.querySelector("h1");

// for (let h2 in h1) { 
//   h2.setAttribute("style", "padding-left:100px", "margin:0px");
// } 
  
let div00 = document.querySelectorAll(".sites");
let div01 = div00.querySelectorAll("div.site1");
console.log(div01);
