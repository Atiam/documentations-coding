const container = document.querySelector('.container');

container.addEventListener('click', function (event) {
  const element = event.target;

  // TODO: Complete function
  if (element.dataset.state === `hidden`) {
    element.textContent = element.dataset.number }
});

