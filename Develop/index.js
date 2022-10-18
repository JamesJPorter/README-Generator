// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const createMarkdown = require('./utils/generateMarkdown')

const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
        {
            type: "input", 
            name: "Title", 
            message: "What is the title of your project?"
        }, 
        {
            type: "input", 
            name: "Description", 
            message: "Describe your project: "
        }, 
        {
            type: "input", 
            name: "Installation", 
            message: "Describe how to install your project: "
        }, 
        {
            type: "input", 
            name: "Usage", 
            message: "Describe how to use your app - provide instructions: "
        }, 
        {
            type: "input",
            name: "Contribution", 
            message: "Describe your contribution guidelines: "
        }, 
        {
            type: "input",
            name: "QuestionsEmail", 
            message: "For questons via email: "
        }, 
        {
            type: "input",
            name: "QuestionsGithub", 
            message: "For questons via Github: "
        }, 
        {
            type: "input",
            name: "Tests", 
            message: "Tests:"
        }, 
        {
            type: "list", 
            name: "License", 
            message: "Choose the license you will be using: ",
            choices: ['MIT', 'MPL', 'GPLv3', 'NONE'],
            filter(val){
                return val.toLowerCase();
            }
        }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return inquirer.prompt(data) 
    .then((data) => {
        const answers = createMarkdown(data)
        console.log(data)
        console.log(answers)
        fs.writeFile(fileName, answers, (error) => {
            error ? console.log(error) : console.log("success!")
        })
        return data 
    })
}


// TODO: Create a function to initialize app
function init() {
    writeToFile ('README.md', questions)
}

// Function call to initialize app
init();
