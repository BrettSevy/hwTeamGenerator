
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const jest = require("jest");
const generateHTML = require("../templates/summary")
const writeFileAsync = util.promisify(fs.writeFile);



async function promptForInfo() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the employee's name?"
    },
    {
      type: "input",
      name: "id",
      message: "What is the employee's ID number?"
    },
    {
      type: "input",
      name: "email",
      message: "What is the employee's email address?"
    },
    {
      type: "checkbox",
      name: "title",
      message: "What is the employee's job title?",
      choices: ["Manager", "Engineer", "Intern"]
    }
  ])
};


async function init() {
  try {
      const answers = await promptForInfo();

      const html = generateHTML(answers);
      await writeFileAsync("./output/team.html", html);

  } catch (err) {
      console.log(err);
  }
}

init();


module.exports = promptForInfo;

