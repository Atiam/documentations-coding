// * It's done when I have initialized my repository with a `package.json` file by running `npm init -y`.

// * It's done when I have installed `inquirer` version 8.2.4 and added it to my list of dependencies by running `npm i inquirer@8.2.4`.

// * It's done when I have installed `colors` and added it to my list of dependencies by running `npm i colors`.




// * It's done when the application asks the user, "What text would you like to log?".

// * It's done when the application asks the user, "What color would you like to use?", and has the options "red", "blue", "green", "yellow", "cyan", and "magenta".

// * It's done when the text is logged in the selected color.


const inquirer = require("inquirer");
const colors = require("colors");

inquirer
.prompt([
    {
        type: "input",
        message: "What text would you like to log?",
        name: "text"
    
    },
    {
        type: "list",
        message: "What color would you like to use?",
        name: "colors",
        choices: ["red", "blue", "green", "yellow", "cyan",  "magenta"]
    }
]).then((response) => 
console.log(colors[response.colors](`${response.text}!`))
);