const userContainer = document.getElementById('users');
const fetchButton = document.getElementById('fetch-button');

function getApi() {
  const requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);
      // TODO: Loop through the data and generate your HTML
      for (let elem of data) {
        // create elements
        const ulEl = document.createElement(`ul`);
        const liEl = document.createElement(`li`);
        const pEl = document.createElement(`p`);
        const aEl = document.createElement(`a`);

        // add content/attr/style/eventlisteners
        pEl.textContent = "The login is: " + elem.login;
        aEl.textContent = "Click here to get the url of " + elem.login + " is " + elem.html_url   
                aEl.setAttribute("href", elem.html_url);
        // liEl.setAttribute("href", elem.html_url);

        // append elements
        liEl.append(pEl, aEl);
        ulEl.append(liEl);
        userContainer.append(ulEl);




      }
    });
}


fetchButton.addEventListener('click', getApi);
