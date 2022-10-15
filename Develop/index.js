// TODO: Include packages needed for this application
const inquirer = require('inquirer')

const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
    inquirer.createPromptModule([
        {
            type: "input", 
            name: "Project Title", 
            message: "What is the title of your project?"
        }, 
        {
            type: "input", 
            name: "Project Description", 
            message: "Describe your project"
        }, 
        {
            type: "input", 
            name: "Installation instructions", 
            message: "Describe how to install your project"
        }, 
        {
            type: "input", 
            name: "User Instructions", 
            message: "Describe how to use your app - provide instructions"
        }, 
        {
            type: "input",
            name: "Contribution Guidelines", 
            message: "Describe your contribution guidelines"
        }, 
        {
            type: "list", 
            name: "License", 
            message: "Choose the license you will be using:",
            choices: ['nonsense', 'irritating', 'how should I know']
        }
    ]).then((response) => {
        const readmeData = response
    })
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
