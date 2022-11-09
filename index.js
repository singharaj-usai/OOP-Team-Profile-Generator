const fs = require("fs");
const inquirer = require("inquirer");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const team = [];

const addManager = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Who is the manager?",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter manager's name!");
          return false;
        }
      },
    },
  ]);
};
