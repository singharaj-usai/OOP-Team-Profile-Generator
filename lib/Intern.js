//INTERN
const Employee = require ('./Employee')
class Intern extends Employee {
    constructor(name, id, email, school) {
        this.name = name
        this.id = id
        this.email = email
        this.school = school
    }
    getSchool(){
        return this.school
    }
    getRole() {
        return 'Intern';
    }
}

//In addition to Employee's properties and methods, Intern will also have the following:

//school

//getSchool()

//getRole()—overridden to return 'Intern'

module.exports = Intern