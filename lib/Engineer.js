//ENGINEER
const Employee = require ('./Employee')
class Engineer extends Employee {
    constructor(name, id, email, github) {
    this.name = name
    this.id = id
    this.email = email
    this.github = github
    }
    getGithub(){
        return this.github
    }
    getRole() {
        return 'Engineer';
    }
}

//In addition to Employee's properties and methods, Engineer will also have the following:

//github—GitHub username

//getGithub()

//getRole()—overridden to return 'Engineer'

module.exports = Engineer