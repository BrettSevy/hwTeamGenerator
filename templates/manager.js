
function generateHTML(answers) {
    console.log(answers)

`<div class="card border-dark mb-4" style="width: 19rem;">
            <div class="card-header">
                <h5>${answers.title}</h5>
                <h5>${answers.name}</h5>
            </div>
            <div class="card-body text-dark">
                <div class="card" style="width: 16rem;">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" style="text-align:left"><strong>ID: </strong>${answers.id}</li>
                        <li class="list-group-item" style="text-align:left"><strong>Email: </strong>${answers.email}
                        </li>
                        <li class="list-group-item" style="text-align:left"><strong>Office:
                            </strong>${answers.officeNumber}</li>
                    </ul>
                </div>
            </div>
        </div>`

// module.exports = generateHTML