// Declaring the dependencies and variables
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateReadme")
const writeFileAsync = util.promisify(fs.writeFile);

//Prompt the user questions to populate the README.md
function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "Project title?",
        },
        {
            type: "input",
            name: "description",
            message: "Description of your project: "
        },
        {
            type: "input",
            name: "installation",
            message: "Describe install process if any: ",
        },
        {
            type: "input",
            name: "usage",
            message: "Project usage?"
        },
        {
            type: "list",
            name: "license",
            message: "What license was used?: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Any contributors?"
        },
        {
            type: "input",
            name: "tests",
            message: "Test to add?"
        },
        {
            type: "input",
            name: "questions",
            message: "What to do for issues? "
        },
        {
            type: "input",
            name: "username",
            message: "Enter GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
        }
    ]);
} 

// Async function using util.promisify 
  async function init() {
    try {
        // Ask user questions and generate responses
        const answers = await promptUser();
        const generateContent = generateReadme(answers);
        // Write new README.md to dist directory
        await writeFileAsync('./dist/README.md', generateContent);
        console.log('✔️  Successfully wrote to README.md');
    }   catch(err) {
        console.log(err);
    }
  }
  
  init();  
