const repoNameEl = document.querySelector('#repo-name');
const issueContainerEl = document.querySelector('#issues-container');
const limitWarningEl = document.querySelector('#limit-warning');

const getRepoName = function () {
  // Where is this value coming from?
  // TODO: Write your answer here
  const queryString = document.location.search;
  const repoName = queryString.split('=')[1];

  if (repoName) {
    repoNameEl.textContent = repoName;

    getRepoIssues(repoName);
  } else {
    // Under what condition will this run?
    // TODO: Write your answer here
    document.location.replace('./index.html');
  }
};

const getRepoIssues = function (repo) {
  const apiUrl = `https://api.github.com/repos/${repo}/issues?direction=asc`;

  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        displayIssues(data);

        // What is this checking for? Under what condition will this be `true`?
        // TODO: Write your answer here
        if (response.headers.get('Link')) {
          displayWarning(repo);
        }
      });
    } else {
      document.location.replace('./index.html');
    }
  });
};

const displayIssues = function (issues) {
  // Is there a difference between this and `!issues.length`?
  // TODO: Write your answer here
  if (issues.length === 0) {
    issueContainerEl.textContent = 'This repo has no open issues!';
    return;
  }

  for (let issueObj of issues) {
    const issueEl = document.createElement('a');
    issueEl.classList = 'list-item flex-row justify-space-between align-center';
    issueEl.setAttribute('href', issueObj.html_url);
    issueEl.setAttribute('target', '_blank');

    const titleEl = document.createElement('span');
    titleEl.textContent = issueObj.title;
    issueEl.appendChild(titleEl);

    const typeEl = document.createElement('span');

    if (issueObj.pull_request) {
      typeEl.textContent = '(Pull request)';
    } else {
      typeEl.textContent = '(Issue)';
    }

    issueEl.appendChild(typeEl);

    issueContainerEl.appendChild(issueEl);
  }
};

// What does this function do?
// TODO: Write your answer here
const displayWarning = function (repo) {
  limitWarningEl.textContent = 'To see more than 30 issues, visit ';

  const linkEl = document.createElement('a');
  linkEl.textContent = 'GitHub.com';
  linkEl.setAttribute('href', `https://github.com/${repo}/issues`);
  linkEl.setAttribute('target', '_blank');

  // Where does this appear on the page?
  // TODO: Write your answer here
  limitWarningEl.appendChild(linkEl);
};

getRepoName();
