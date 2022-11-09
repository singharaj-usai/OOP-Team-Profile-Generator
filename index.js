const fs = require("fs");
const inquirer = require("inquirer");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const team = [];

const addManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Who is the manager?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter manager's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the manager's ID?",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter manager's ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the manager's Email?",
        validate: (email) => {
          //Regex email
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (valid) {
            return true;
          } else {
            console.log("Please enter manager's Email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
        validate: (officeInput) => {
          if (officeInput) {
            return true;
          } else {
            console.log("Please enter manager's office number!");
            return false;
          }
        },
      },
    ])
    .then((managerInput) => {
      const { name, id, email, officeNumber } = managerInput;
      const manager = new Manager(name, id, email, officeNumber);
      team.push(manager);
      console.log(manager);
    });
};

const addEmployee = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "role",
      message: "What is the employee's role?",
      choices: ["Engineer", "Intern"],
    },
    {
      type: "input",
      name: "name",
      message: "What is the name of the employee?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter an employee's name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "What is the employee's ID?",
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter employee's ID!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is the employee's Email?",
      validate: (email) => {
        //Regex email
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
        if (valid) {
          return true;
        } else {
          console.log("Please enter the employee's Email!");
          return false;
        }
      },
    },
  ]);
};
