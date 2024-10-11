const badRequestUrl = 'https://api.github.com/orgs/nodejs/oreps?per_page=5';
const responseText = document.getElementById('response-text');

function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      // Check the console first to see the response.status
      console.log(response.ok);
      // Then write the conditional based on that response.status value
      // Make sure to display the response on the page
      if (response.ok === false){
        responseText.textContent = "OUPS NOT FOUND!!!!!! ERROR " + response.status;
        throw new Error('GITHUB REPO NOT FOUND');
      }
      return response.json();

    })


    .then(function (data) {
      console.log(data);
    });
}

getApi(badRequestUrl);
