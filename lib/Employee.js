//EMPLOYEE
//ENGINEER, INTERN AND MANAGER EXTENDS EMPLOYEES
class Employee {
    constructor(name, id, email) {
     this.name = name;
     this.id = id;  
     this.email = email;
    // this.color = color; 
    }
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee';
    }

}

