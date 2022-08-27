//Basically make something similar to the node.js readme assignment
const inquirer = require('inquirer')

const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
//const Employee = require('./lib/Employee')

//const Intern = require('./lib/Intern')

//const Manager = require('./lib/Manager')

//const Engineer = require('./lib/Engineer')

let Employees = []
// Function to initialize app

//function questions(){

inquirer
.prompt([
   {
      type: 'list',
      name: 'choices',
      message: 'Which employee do you want to choose?',
      choices: ['manager', 'intern', 'engineer', 'no more employee'],
   }
])
.then(answers => {
   console.info('Answer:', answers.choices);
   manager()

   engineer()

   intern()

})


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
}


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
}

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
}
//}

