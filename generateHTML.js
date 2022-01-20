const inputArray = require('./index');
const teamMembers = [];


function generateHTML(userInput) {
    if(userInput){
    userInput.map(employee => {
        if (employee.getRole() === 'Manager') {
            const managerCard = userInput.map(renderManager);
            teamMembers.push(managerCard);
        }
        if (employee.getRole() === 'Engineer') {
            const engineerCard = userInput.map(renderEngineer);
            teamMembers.push(engineerCard);
        }
        if (employee.getRole() === 'Intern') {
            const internCard = userInput.map(renderIntern);
            teamMembers.push(internCard);
        }
    })}
    return renderTeamMembers(teamMembers)
}

function renderManager(userInput) {
  return `<div class="row section">
    <div class="col s6 offset-s3">
        <header class = "card-panel teal">
            <i class="material-icons">account_box</i>
            Manager: ${userInput.firstLast}
        </header>
      <div class="card-panel teal lighten-4">
        <span class="grey darken-3-text">
        <p>ID: ${userInput.employeeId}</p>
        <p>Email: ${userInput.email}</p>
        <p>Office Number: ${userInput.officeNum}</p>
        </span>
      </div>
    </div>
  </div>`
}

function renderEngineer(userInput) {
    return `<div class="row section">
    <div class="col s6 offset-s3">
        <header class = "card-panel teal">
            <i class="material-icons">account_box</i>
            Engineer: ${userInput.firstLast}
        </header>
      <div class="card-panel teal lighten-4">
        <span class="grey darken-3-text">
        <p>ID: ${userInput.employeeId}</p>
        <p>Email: ${userInput.email}</p>
        <p>GitHub: ${userInput.githubUser}</p>
        </span>
      </div>
    </div>
  </div>`
}

function renderIntern(userInput) {
    return `<div class="row section">
    <div class="col s6 offset-s3">
        <header class = "card-panel teal">
            <i class="material-icons">account_box</i>
            Intern: ${userInput.firstLast} 
        </header>
      <div class="card-panel teal lighten-4">
        <span class="grey darken-3-text">
        <p>ID: ${userInput.employeeId}</p>
        <p>Email: ${userInput.email}</p>
        <p>School: ${userInput.school}</p>
        </span>
      </div>
    </div>
</div>`
}

function renderTeamMembers(teamMembers) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" 
      href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <title>Team Profile Generator</title>
    </head>
    <header>
        <nav>
            <div class="nav-wrapper deep-orange darken-1">
              <a class="brand-logo center ">Our Team</a>
            </div>
          </nav>
    </header>
    <body>
    ${teamMembers}
    </body>
    </html>
    `
}

module.exports = generateHTML