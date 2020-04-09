const fs = require('fs');
const   path = require('path');
const inquirer = require('inquirer')
const axios =  require('axios');
const api = require('./Utiliities/api');
const generateReadMe = require('./Utiliities/generateREADME')


// asks user questions
const questions = [
    {
      type: "input",
      name: "github",
      message: "What is your GitHub username?"
    },
    {
      type: "input",
      name: "email1",
      message: "What is your Github email address?"
    },
    {
      type: "input",
      name: "title",
      message: "What is your project's name?"
    },
    {
      type: "input",
      name: "description",
      message: "Please write a short description of your project"
    },
    {
      type: "list",
      name: "license",
      message: "What kind of license should your project have?",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
      type: "input",
      name: "installation",
      message: "What command should be run to install dependencies?",
      default: "npm i"
    },
    {
      type: "input",
      name: "test",
      message: "What command should be run to run tests?",
      default: "npm test"
    },
    {
      type: "input",
      name: "usage",
      message: "What does the user need to know about using the repo?",
    },
    {
      type: "input",
      name: "contributing",
      message: "What does the user need to know about contributing to the repo?",
    }
  ];

  function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(fileName), data);
  }

// init function compiles the response object and data object into a single function
// also writes the README 
function init() {
    inquirer.prompt(questions).then((userResponse)=>{
       
      api.getUser(userResponse.github).then(function(data){

        let allData = {...userResponse, ...data.data};

        let readMeMarkUp = generateReadMe(allData);
        writeToFile("GeneratedREADME.md",  readMeMarkUp);

      })

    });
}
// calls init function
init();
