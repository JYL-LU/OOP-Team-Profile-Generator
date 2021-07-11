const inquirer = require("inquirer");
const jest = require("jest");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const managerArr = [];
const engineerArr = [];
const internArr = [];
const fs = require("fs");

function init() {
  addManager();
}

function addManager() {
  console.log("# Manager Section");
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of your manager?",
        name: "name",
      },

      {
        type: "input",
        message: "What is the manager's employee ID?",
        name: "id",
      },

      {
        type: "input",
        message: "Enter his/her email address",
        name: "email",
      },

      {
        type: "input",
        message: "What is the manager's office number?",
        name: "number",
      },
    ])
    .then((data) => {
      //generate manager's HTML
      //employee section
      const newManager = new Manager(
        data.name,
        data.id,
        data.email,
        data.number
      );
      managerArr.push(newManager);

      //console.log(newManager, newEngineer, newIntern);
      //generateManagerHtml(data);
      addEmployee();
    });
}

function addEmployee() {
  console.log("# Employee Section");
  inquirer
    .prompt([
      {
        type: "list",
        message:
          "Do you want to add an engineer or an intern or to finish building my team?",
        name: "position",
        choices: ["Engineer", "Intern", "finished"],
      },
    ])
    .then((data) => {
      if (data.position == "Engineer") {
        addEngineer();
      } else if (data.position == "Intern") {
        addIntern();
      } else if (data.position == "finished") {
        console.log("you have finished building your team!");
        createFile();
      }
    });
}

function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of your engineer?",
        name: "name",
      },

      {
        type: "input",
        message: "What is the engineer's employee ID?",
        name: "id",
      },

      {
        type: "input",
        message: "Enter his/her email address",
        name: "email",
      },

      {
        type: "input",
        message: "Enter his/her github username",
        name: "github",
      },
    ])
    .then((data) => {
      const newEngineer = new Engineer(
        data.name,
        data.id,
        data.email,
        data.github
      );

      //generate engineer HTML
      engineerArr.push(newEngineer);

      addEmployee();
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of your intern?",
        name: "name",
      },

      {
        type: "input",
        message: "What is the engineer's employee ID?",
        name: "id",
      },

      {
        type: "input",
        message: "Enter his/her email address",
        name: "email",
      },

      {
        type: "input",
        message: "Which school does he/she go to?",
        name: "school",
      },
    ])

    .then((data) => {
      const newIntern = new Intern(data.name, data.id, data.email, data.school);
      internArr.push(newIntern);
      //generate intern HTML
      addEmployee();
    });
}

function createFile() {
  fs.writeFile(
    "./dist/team.html",
    `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <script
          src="https://kit.fontawesome.com/df3f087038.js"
          crossorigin="anonymous"
        ></script>
    
        <link rel="stylesheet" href="style.css" />
    
        <title>Team Members</title>
      </head>
      <body>
        <!-- As a heading -->
        <nav class="navbar">
          <div class="container-fluid justify-content-center">
            <span class="navbar-brand mb-0 h1">Team Members</span>
          </div>
        </nav>
    
        <main>
            <div class="container">
                <div class="row justify-content-center">
              <!--Team Cards-->
                ${cardManager()}
                ${cardEngineer()}
                ${cardIntern()}
                </div>
            </div>
        </main>
    </body>
    
    </html>
    

  `,
    function (err) {
      if (err) throw err;
    }
  );
}

function cardManager() {
  let manager = "";
  for (let i = 0; i < managerArr.length; i++) {
    const element = managerArr[i];
    manager += `
    <div class="col-4 mt-4">
    <div class="card h-100">
    <div class="card-header">
        <h2>${element.name}</h2>
        <h4>Manager</h4>
        <i class="material-icons">supervisor_account</i>

        <div class="card-body">
        <p class="id">ID: ${element.id}</p>
        <p class="email">Email: <a href="mailto:${element.email}">${element.email}</a></p>
        <p class="office-number">Office Number: ${element.number}</p>
        </div>
      </div>
    </div>
  </div>
  `;
  }
  return manager;
}

function cardEngineer() {
  let engineer = "";
  for (let i = 0; i < engineerArr.length; i++) {
    const element = engineerArr[i];
    engineer += `
    <div class="col-4 mt-4">
    <div class="card h-100">
    <div class="card-header">
          <h2>${element.name}</h2>
          <h4>Engineer</h4>
          <i class="material-icons">laptop</i>

          <div class="card-body">
          <p class="id">ID: ${element.id}</p>
          <p class="email">Email: <a href="mailto:${element.email}">${element.email}</a></p>
          <p class="github">Github: <a href="https://github.com/${element.github}">${element.github}</a></p>
          </div>
        </div>
      </div>
    </div>
    `;
  }
  return engineer;
}

function cardIntern() {
  let intern = "";
  for (let i = 0; i < internArr.length; i++) {
    const element = internArr[i];
    intern += `
      <div class="col-4 mt-4">
      <div class="card h-100">
      <div class="card-header">
          <h2>${element.name}</h2>
          <h4>Intern</h4>
          <i class="material-icons">school</i>
          
          <div class="card-body">
          <p class="id">ID: ${element.id}</p>
          <p class="email">Email: <a href="mailto:${element.email}">${element.email}</a></p>
          <p class="school">School: ${element.school}</p>
          </div>
        </div>
      </div>
    </div>
    `;
  }
  return intern;
}

init();
