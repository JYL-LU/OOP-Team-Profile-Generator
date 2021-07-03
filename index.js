//const { throwStatement } = require("@babel/types");
const inquirer = require("inquirer");
const jest = require("jest");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const managerArr = [];
const engineerArr = [];
const internArr = [];

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

init();
