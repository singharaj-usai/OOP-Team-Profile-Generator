//ENGINEER
class Engineer extends Employee {
    constructor(name, id, email, github) {
    this.github = github
    }
    
    getRole() {
        return 'Engineer';
    }
}

//In addition to Employee's properties and methods, Engineer will also have the following:

//github—GitHub username

//getGithub()

//getRole()—overridden to return 'Engineer'