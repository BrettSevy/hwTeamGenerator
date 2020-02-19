const promptForInfo = require("./lib/app")



async function startProgram() {
    let { name, id, title, email} = await promptForInfo()
    console.log(name, id, title, email);
  }







