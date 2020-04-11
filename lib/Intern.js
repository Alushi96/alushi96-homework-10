// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        var role = "Intern";
        return role;
    }
}

const intern = new Intern("Ali", 15, "Ali@gmail.com", "Vermont");

intern.getName();
intern.getId();
intern.getEmail();
intern.getSchool();
intern.getRole();

module.exports = Intern;