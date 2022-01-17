// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./generateHTML');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const inputArray = [];

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

function inputManager() {
    inquirer
    .prompt(managerInput)
    .then((userInput) => {
        const addManager = new Manager(userInput);
        inputArray.push(addManager)
        switch (userInput.teamMember) {
            case 'Manager':
                init();
                break;
            case 'Engineer':
                init();
                break;
            case 'Intern':
                init();
                break;
            case 'I am finsihed building my team.':
                writeToFile('./output/generateHTML.html', generateHTML(inputArray));
                break;
        }
    });
}

function inputEngineer() {
    inquirer
    .prompt(engineerInput)
    .then((userInput) => {
        const addEngineer = new Engineer(userInput);
        inputArray.push(addEngineer)
        switch (userInput.teamMember) {
            case 'Manager':
                init();
                break;
            case 'Engineer':
                init();
                break;
            case 'Intern':
                init();
                break;
            case 'I am finsihed building my team.':
                writeToFile('./output/generateHTML.html', generateHTML(inputArray));
                break;
        }
    });
}

function inputIntern() {
    inquirer
    .prompt(internInput)
    .then((userInput) => {
        const addIntern = new Intern(userInput);
        inputArray.push(addIntern)
        switch (userInput.teamMember) {
            case 'Manager':
                init();
                break;
            case 'Engineer':
                init();
                break;
            case 'Intern':
                init();
                break;
            case 'I am finsihed building my team.':
                writeToFile('./output/generateHTML.html', generateHTML(inputArray));
                break;
        }
    });
}

function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Team successfully generated!')
        );
}

function init() {
    inquirer
        .prompt(managerInput)
        .then((userInput) => {console.log(userInput)
            const fileNew = generateHTML(userInput);
            const fileName = './output/generatedHTML.html';

            writeToFile(fileName, fileNew);
        })
}

init();

// function roleInput() {
//     if (userInput.choices === 'Manager') {
//         inquirer.prompt(managerInput);
//     } else if (userInput.choices === 'Engineer') {
//         inquirer.prompt(engineerInput);
//     } else if (userInput.choices === 'Intern') {
//         inquirer.prompt(internInput);
//     } else if (userInput.choices === 'I am finsihed building my team.') {
//         init();
//     }
// } 

// function inputManager() {
//     inquirer
//     .prompt(managerInput)
//     .then((userInput) => {
//         const manager = new Manager(userInput);
//         team.push(manager);
//         console.log(team);
//     })
//     .catch(error => console.log(error));
// }

// function inputEngineer() {
//     inquirer
//     .prompt(engineerInput)
//     .then((userInput) => {
//         const engineer = new Engineer(userInput);
//         team.push(engineer);
//         console.log(team);
//         inputRole();
//     })
//     .catch(error => console.log(error));
// }

// function inputIntern() {
//     inquirer
//     .prompt(internInput)
//     .then((userInput) => {
//         const intern = new Intern(userInput);
//         team.push(intern);
//         console.log(team);
//         inputRole();
//     })
//     .catch(error => console.log(error));
// }

// function inputRole() {
//     inquirer
//     .prompt(newRole)
//     .then((userInput) => {
//         if (userInput.choices === 'Manager') 
//             inputManager();
//         if (userInput.choices === 'Engineer')
//             inputEngineer();
//         if (userInput.choices === 'Intern')
//             inputIntern();
//         if (userInput.choices === 'I am finsihed building my team.')
//             writeToFile();
//     })
// }



