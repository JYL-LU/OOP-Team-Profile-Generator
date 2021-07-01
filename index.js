//const { throwStatement } = require("@babel/types");
const inquirer = require("inquirer");
const jest = require("jest");

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
        name: "employee_ID",
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
        name: "employee_ID",
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
      //generate engineer HTML
      addEmployee();
    });
}
init();
