//Packages for application
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./generateHTML');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

//Empty array of responses
const inputArray = [];

//Manager Questions
const managerInput = [
    {
        type: 'input',
        name: 'firstLast',
        message: 'What is the Team Manager\'s name?'
    },
    {
        type: 'input',
        name: 'employeeId',
        message: 'What is the Team Manager\'s employee ID?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the Team Manager\'s email?'
    },
    {
        type: 'input',
        name: 'officeNum',
        message: 'What is the Team Manager\'s office number?'
    },
    {
        type: 'list',
        name: 'teamMember',
        message: 'Which Team Member would you like to add next?',
        choices: ['Manager', 'Engineer', 'Intern', 'I am finsihed building my team.']
    }
]

//Engineer Questions
const engineerInput = [
    {
        type: 'input',
        name: 'firstLast',
        message: 'What is the Team Engineer\'s name?'
    },
    {
        type: 'input',
        name: 'employeeId',
        message: 'What is the Team Engineer\'s employee ID?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the Team Engineer\'s email?'
    },
    {
        type: 'input',
        name: 'githubUser',
        message: 'What is the Team Engineer\'s GitHub username?'
    },
    {
        type: 'list',
        name: 'teamMember',
        message: 'Which Team Member would you like to add next?',
        choices: ['Manager', 'Engineer', 'Intern', 'I am finsihed building my team.']
    }
]

// Intern Questions
const internInput = [
    {
        type: 'input',
        name: 'firstLast',
        message: 'What is the Team Intern\'s name?'
    },
    {
        type: 'input',
        name: 'employeeId',
        message: 'What is the Team Intern\'s employee ID?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the Team Intern\'s email?'
    },
    {
        type: 'input',
        name: 'school',
        message: 'Which school does the Team Intern attend?'
    },
    {
        type: 'list',
        name: 'teamMember',
        message: 'Which Team Member would you like to add next?',
        choices: ['Manager', 'Engineer', 'Intern', 'I am finsihed building my team.']
    }
]

//Functions to select team member and generate HTML file
function inputEngineer() {
    inquirer
    .prompt(engineerInput)
    .then((userInput) => {
        const addEngineer = new Engineer(userInput.firstLast, userInput.employeeId, userInput.email, userInput.githubUser);
        inputArray.push(addEngineer)
        switch (userInput.teamMember) {
            case 'Manager':
                init();
                break;
            case 'Engineer':
                inputEngineer();
                break;
            case 'Intern':
                inputIntern();
                break;
            case 'I am finsihed building my team.':
                const renderHTML = generateHTML(inputArray)
                writeToFile('./output/generateHTML.html', renderHTML);
                break;
        }
    });
}

function inputIntern() {
    inquirer
    .prompt(internInput)
    .then((userInput) => {
        const addIntern = new Intern(userInput.firstLast, userInput.employeeId, userInput.email, userInput.school);
        inputArray.push(addIntern)
        switch (userInput.teamMember) {
            case 'Manager':
                init();
                break;
            case 'Engineer':
                inputEngineer();
                break;
            case 'Intern':
                inputIntern();
                break;
            case 'I am finsihed building my team.':
                const renderHTML = generateHTML(inputArray)
                writeToFile('./output/generateHTML.html', renderHTML);
                break;
        }
    });
}

//Initialize application
function init() {
    inquirer
    .prompt(managerInput)
    .then((userInput) => {
        const addManager = new Manager(userInput.firstLast, userInput.employeeId, userInput.email, userInput.officeNum);
        inputArray.push(addManager)
        switch (userInput.teamMember) {
            case 'Manager':
                init();
                break;
            case 'Engineer':
                inputEngineer();
                break;
            case 'Intern':
                inputIntern();
                break;
            case 'I am finsihed building my team.':
                const renderHTML = generateHTML(inputArray)
                writeToFile('./output/generateHTML.html', renderHTML);
                break;
        }
    });
}
//Write to file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Team successfully generated!')
    );
}

init();






