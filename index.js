//const { throwStatement } = require("@babel/types");
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
    "team.html",
    `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Team Members</title>
      </head>
      <body>
    <div>
        <h1>
            team members
        </h1>
    </div>
    <div>
        <div>
            ${cardManager()}
            ${cardEngineer()}
            ${cardEngineer()}
            ${cardIntern()}
            ${cardIntern()}
        </div>
    </div>
    
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
    <divclass="col-4 mt-4">
    <div class="card h-100">
    <div class="card-header">
        <h2>${element.name}</h2>
        <div class="card-body">
        <p>${element.role}</p>
        <p>${element.id}</p>
        <p>${element.email}</p>
        <p>${element.number}</p>
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
    <divclass="col-4 mt-4">
    <div class="card h-100">
    <div class="card-header">
          <h2>${element.name}</h2>
          <div class="card-body">
          <p>${element.role}</p>
          <p>${element.id}</p>
          <p>${element.email}</p>
          <p>${element.github}</p>
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
      <divclass="col-4 mt-4">
      <div class="card h-100">
      <div class="card-header">
          <h2>${element.name}</h2>
          <div class="card-body">
          <p>${element.role}</p>
          <p>${element.id}</p>
          <p>${element.email}</p>
          <p>${element.school}</p>
          </div>
        </div>
      </div>
    </div>
    `;
  }
  return intern;
}

init();
