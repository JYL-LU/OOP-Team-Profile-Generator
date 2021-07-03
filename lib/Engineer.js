const Employee = require("./Employee");

// get data from Employee class
class Engineer extends Employee {
  constructor(name, id, email, github) {
    // super is to grab infor from that class
    super(name, id, email);
    this.github = github;
  }
  github() {
    return this.github;
  }
  getRole() {
    return "Emgineer";
  }
}

module.exports = Engineer;
