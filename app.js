const inquirer = require("inquirer");
const fs = require('fs');
const genMarkdown = require('./utils/generateMarkdown.js');
// import genMarkdown from "./src/page-template.js";
// import writeFile from './utils/gen-md.js'
// const writeFile = require("./utils/gen-md.js");
//was promptUser
const promptReadme = () => {
    console.log(`
  =================
  Create a Readme
  =================
  `);
 inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: "What is the name of your project? (Required)",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("You need to enter a project name!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "description",
          message: "Provide a description of the project (Required)",
          validate: (descriptionInput) => {
            if (descriptionInput) {
              return true;
            } else {
              console.log("You need to enter a project description!");
              return false;
            }
          },
        },
        {
            type: "input",
            name: "installation",
            message: "Provide a description of how to install the project (Required)",
            validate: (installationInput) => {
              if (installationInput) {
                return true;
              } else {
                console.log("You need to enter how to install!");
                return false;
              }
            },
          },
          {
            type: "input",
            name: "usage",
            message: "Provide a description how to use the project (Required)",
            validate: (usageInput) => {
              if (usageInput) {
                return true;
              } else {
                console.log("You need to enter how to use the app!");
                return false;
              }
            },
          },
          {
            type: "input",
            name: "contribution",
            message: "Who contributed to the project? (Separated by spaces and , Required)",
            validate: (contributionInput) => {
              if (contributionInput) {
                return true;
              } else {
                console.log("You need to enter contributers!");
                return false;
              }
            },
          },
          {
            type: "input",
            name: "test",
            message: "Enter instructions on how to test app (Required)",
            validate: (testInput) => {
              if (testInput) {
                return true;
              } else {
                console.log("You need to enter how to test!");
                return false;
              }
            },
          },
          {
            type: "checkbox",
            name: "license",
            message: "Choose a license for your project:  ",
            choices: ["MIT", "Apache-2.0", "ISC", "None"],
          },
        {
          type: "input",
          name: "github",
          message: "Enter your GitHub username. (Required)",
          validate: (gitInput) => {
            if (gitInput) {
              return true;
            } else {
              console.log("You need to enter a project GitHub link!");
              return false;
            }
          },
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email address. (Required)",
            validate: (emailInput) => {
              if (emailInput) {
                return true;
              } else {
                console.log("You need to enter a project GitHub link!");
                return false;
              }
            },
          },
      ])
      .then((userInput) => {
        console.log(userInput)
        return writeToFile('./dist/README.md', genMarkdown(userInput));
        // return genMarkdown(userInput);
      })
    };
  // TODO: Create a function to write README file
  function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
       throw err;
      } else {
        console.log('File written');
      }
    })
  };
// TODO: Create a function to initialize app
promptReadme();
// Function call to initialize app
