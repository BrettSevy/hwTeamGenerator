const fs = require("fs");
const util = require("util");
const writeFileSync = util.promisify(fs.writeFile);
const createHTML = require("./generateHTML.JS");

const generateCards = (managerObj, engineerObj, internObj) => {
	const createManager = managerObj.map(manager => {
		return `
    <div class="card text-white bg-danger ml-3">
        <div class="card-header">
            <h2 class="card-title">${manager.name}</h2>
			<h3 class ="mr-3">${manager.getRole()}
			</h3>
        </div>
        <div class="card-body bg-danger">
                <p>ID: ${manager.id}</p>
                <p>Email: ${manager.email}<a href="mailto:${manager.email}"></a></p>
                <p>Office #: ${manager.getOfficeNumber()}</p>
        
        </div>
    </div>`;
	});

	const createEngineer = engineerObj.map(engineer => {
		return `
    <div class="card text-white bg-dark ml-3">
        <div class="card-header">
            <h2 class="card-title">${engineer.name}</h2>
            <h3 class="card-title">
            <i class="mr-3"></i>${engineer.getRole()}
			</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item bg-dark">ID: ${engineer.id}</li>
                <li class="list-group-item bg-dark">Email: ${engineer.email}
                <a href="mailto:${engineer.email}"></a></li>
                <li class="list-group-item bg-dark">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
            </ul>
        </div>
    </div>`;
	});

	const createIntern = internObj.map(intern => {
		return `
    <div class="card border-danger ml-3">
        <div class="card-header">
            <h2 class="card-title text-danger">${intern.name}</h2>
            <h3 class="card-title">
			<i class="mr-3"></i>${intern.getRole()}
			</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: ${intern.email}
                <a href="mailto:${intern.email}"></a></li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
    </div>`;
	});

	const generateHTML = createHTML(
		createManager,
		createEngineer,
		createIntern
	);

	fs.writeFileSync("../output/team.html", generateHTML, function(err) {
		if (err) {
			return console.log(err);
		}
	});
};

module.exports = generateCards