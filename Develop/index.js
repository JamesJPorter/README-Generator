// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
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
            type: "input",
            name: "Email", 
            message: "For questons (email)?"
        }, 
        {
            type: "list", 
            name: "License", 
            message: "Choose the license you will be using:",
            choices: ['MIT', 'ISC', 'GNUPLv3'],
            filter(val){
                return val.toLowerCase();
            }
        }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
