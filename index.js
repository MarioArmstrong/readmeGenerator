const inquirer = require('inquirer');
const fs = require('fs');

// const path = require('path');
const generateMarkdown = require('./assets/generateMarkdown');

inquirer.prompt ([
    {
    type: 'input',
    message: 'what is the name of your project?',
    name: 'project'
    },
    {
    type: 'input',
    message: 'what is your Github Live project link?',
    name: 'live'
    },
    {
    type: 'input',
    message: 'what is your Github repository link?',
    name: 'repo'
    },
    {
    type: 'input',
    message: 'what is your user story?"',
    name: 'story'
    },
    {
    type: 'input',
    message: 'what was your motivation?',
    name: 'motivation'
    },
    {
    type: 'input',
    message: 'what problem did it solve?',
    name: 'problem'
    },
    {
    type: 'input',
    message: 'what did you learn?',
    name: 'learn'
    },
    {
    type: 'input',
    message: 'What makes your project stand out?',
    name: 'standout'
    },
    {
    type: 'input',
    message: 'List some challenges you faced and improvements you hope to make in the future.',
    name: 'challengesWins'
    },
    {
    type: 'input',
    message: 'What are the steps required to install this project? Are there any dependencies?',
    name: 'requirements'
    },
    {
    type: 'input',
    message: 'Please list all contributors by providing their Github profile links.',
    name: 'constributors'
    },
    {
    type: 'input',
    message: 'Please list any tutorials url links used to complete this project.',
    name: 'tutorials'
    }
       
])
.then((answers) => {
    // console.log(answers);
    const userData = generateMarkdown(answers);

    fs.writeFile('README.md', userData, (err) =>
    err ? console.err(err) : console.log('Successfully created a README.md file')
)
});
