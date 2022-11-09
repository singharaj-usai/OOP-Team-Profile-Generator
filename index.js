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
      }
    },
    {
      type: "input",
      name: "id",
      message: "What is the manager's ID?",
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter manager's ID!");
          return false;
        }
      }
    },
    {
      type: "input",
      name: "email",
      message: "What is the manager's Email?",
      validate: email => {
         //Regex email
         valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
         if (valid) {
            return true;
         } else {
            console.log("Please enter manager's Email!")
            return false;
         }
      }
    },
    
  ]);
};
