const issueContainer = document.getElementById('issues');
const fetchButton = document.getElementById('fetch-button');

function getApi() {
  const requestUrl = 'https://api.github.com/repos/nodejs/node/issues?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        const userName = document.createElement('h3');
        const issueTitle = document.createElement('p');
        userName.textContent = data[i].user.login;
        issueTitle.textContent = data[i].title;
        issueContainer.append(userName);
        issueContainer.append(issueTitle);
      }
    });
}
fetchButton.addEventListener('click', getApi);
