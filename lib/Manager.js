//MANAGER
const Employee = require ('./Employee')
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        this.name = name
        this.id = id
        this.email = email
        this.officeNumber = officeNumber
    }
    getRole() {
        return 'Manager';
    }
}

//In addition to Employee's properties and methods, Manager will also have the following:

//officeNumber

//getRole()—overridden to return 'Manager'

module.exports = Manager