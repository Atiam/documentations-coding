// Import readFile and writeFile from the fs/promises module. The fs/promises module exports methods that return
// promises for common file system tasks.
const { readFile, writeFile } = require('fs/promises');
const BlogPost = require('./lib/blogPost');

// TODO: First, call readFile to asynchronously read the data from data/post.json.
readFile('./data/post.json', 'utf-8').then((json) => {
  console.log('Received data from post.json');
  // TODO: parse the json string and assign the resulting object to a variable
  const blogData = JSON.parse(json);
  // TODO: Use the BlogPost class to create a new BlogPost object and use its `render()` method to return an html string.
  //
  // TODO: Write the html to file
  //
});

// TODO: print a message in the console only after the html file is written.


const inquirer = require('inquirer');

inquirer
  .prompt({
    type: 'input',
    name: 'username',
    message: 'Enter a Github Username:',
  })
  // promises are chained to directly pass inquirer data into fetch request
  .then((res) => fetch(`https://api.github.com/users/${res.username}`))
  // promises are chained to parse the request for the json data
  .then((res) => res.json())
  // json data is accepted as user and logged to the console
  .then((user) => console.log(user));

