//Basically make something similar to the node.js readme assignment
const inquirer = require('inquirer')

const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js');
const Employee = require('./lib/Employee')

const Intern = require('./lib/Intern')

const Manager = require('./lib/Manager')

const Engineer = require('./lib/Engineer')

let Employees = []
// Function to initialize app
function init() {
manager()
function manager() {
    inquirer
    .prompt([
        {
           type: 'input',
           name: 'name',
           message: 'What is the manager\'s name?', 
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the manager\'s id?', 
         },
         {
            type: 'input',
            name: 'email',
            message: 'What is the manager\'s email?', 
         },
         {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the manager\'s office number?', 
         }
    ])
    .then((results) => {
        const data = new Manager (results.name, results.id, results.email, results.officeNumber)
        console.log(data)
        Employees.push(data)
    })
}

engineer()
function engineer() {
    inquirer
    .prompt([
        {
           type: 'input',
           name: 'name',
           message: 'What is the engineer\'s name?', 
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the engineer\'s id?', 
         },
         {
            type: 'input',
            name: 'email',
            message: 'What is the engineer\'s email?', 
         },
         {
            type: 'input',
            name: 'github',
            message: 'What is the engineer\'s github', 
         }
    ])
    .then((results) => {
        const data = new Engineer (results.name, results.id, results.email, results.github)
        console.log(data)
        Employees.push(data)
    })
}

intern()
function intern() {
    inquirer
    .prompt([
        {
           type: 'input',
           name: 'name',
           message: 'What is the intern\'s name?', 
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the intern\'s id?', 
         },
         {
            type: 'input',
            name: 'email',
            message: 'What is the intern\'s email?', 
         },
         {
            type: 'input',
            name: 'school',
            message: 'What is the intern\'s school', 
         }
    ])
    .then((results) => {
        const data = new Intern (results.name, results.id, results.email, results.school)
        console.log(data)
        Employees.push(data)
    })
}

}

// Function call to initialize app
init()