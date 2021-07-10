const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, number) {
    // super is to grab infor from that class
    super(name, id, email);
    this.number = number;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
