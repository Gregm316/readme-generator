const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a description of your project'
    },
    {
        type: 'input',
        name: 'tableofcontents',
        message: 'Please write a description of your project'
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the steps to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
    },
    {
        type: 'input',
        name: 'tests', 
        message: 'Please provide instructions and examples on how to run tests.',
        default: 'npm test'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },

    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide guidelines for contributing.',
    }
];


function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}


function init() {
inquirer
  .prompt(questions)
  .then((inquirerResponses) => {
   writeToFile("README.md", generateMarkdown({ ...inquirerResponses }))
  })
};


init();
