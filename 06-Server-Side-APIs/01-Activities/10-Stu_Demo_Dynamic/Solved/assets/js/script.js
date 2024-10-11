const usersContainer = document.getElementById('users');
const fetchButton = document.getElementById('fetch-button');

function getApi() {
  const requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //Using console.log to examine the data
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        //Creating a h3 element and a p element
        const userName = document.createElement('h3');
        const userUrl = document.createElement('p');

        //Setting the text of the h3 element and p element.
        userName.textContent = data[i].login;
        userUrl.textContent = data[i].html_url;

        //Appending the dynamically generated html to the div associated with the id="users"
        //Append will attach the element as the bottom most child.
        usersContainer.append(userName);
        usersContainer.append(userUrl);
      }
    });
}
fetchButton.addEventListener('click', getApi);
