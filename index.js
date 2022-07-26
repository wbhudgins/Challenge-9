// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require('fs');
// TODO: Create an array of questions for user input

const generateContent = ({title, motivation, build, problem, learn, install, usage, cont, tests, license, questions, questions1}, licenseBadge) =>
`# ${title}

${licenseBadge}

## Description

- ${motivation}

- ${build},

- ${problem}

- ${learn}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

- ${install}

## Usage

- ${usage}

## Contribution

- ${cont}

## Tests

- ${tests}

## License

- ${license}

## Questions

- [GitHub Username](https://github.com/${questions})

- [Contact Me](mailto: ${questions1})`

inquirer
    .prompt([
        {
            name: "title",
            type: "input",
            message: "What is the name of your Project?"
        },
        {
            name: "motivation",
            type: "input",
            message: "What was your motivation for this project?"
        },
        {
            name: "build",
            type: "input",
            message: "Why did you build this project?"
        },
        {
            name: "problem",
            type: "input",
            message: "What problem does it solve??"
        },
        {
            name: "learn",
            type: "input",
            message: "What did you learn?"
        },
        {
            name: "install",
            type: "input",
            message: "Describe the installation process for your project..."
        },
        {
            name: "usage",
            type: "input",
            message: "Provide instructions and examples of usage on your product..."
        },
        {
            name: "cont",
            type: "input",
            message: "Explain how other developers may contribute to your project..."
        },
        {
            name: "tests",
            type: "input",
            message: "Describe the tests you implemeted into this project..."
        },
        {
            name: "license",
            type: "list",
            message: "Please select a license based on user permissions you require...",
            choices: ["I need to work in a community", "I want it permissable", "I want to share improvments only"]
        },
        {
            name: "questions",
            type: "input",
            message: "Please enter your GitHub Username..."
        },
        {
            name: "questions1",
            type: "input",
            message: "Please enter your Email Address..."
        }

    ])
    .then((data) => {

        if (data.license === "I need to work in a community") {
            data.license = `[Apache License v 2.0](http://www.apache.org/licenses/LICENSE-2.0)`
        }

        if (data.license === "I want it permissable") {
            data.license = "[MIT License](https://opensource.org/licenses/MIT)"
        }

        if (data.license === "I want to share improvments only") {
            data.license = "[GNU v3](https://www.gnu.org/licenses/gpl-3.0)"
        }

        let licenseBadge = getBadge(data.license)

        let pageContent = generateContent(data, licenseBadge)

        fs.writeFile('README.md', pageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md file!')
    );
    })

    function getBadge(license) {
        let badge;
        if (license === "[Apache License v 2.0](http://www.apache.org/licenses/LICENSE-2.0)") {
            badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        } else if (license === "[MIT License](https://opensource.org/licenses/MIT)") {
            badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        } else if (license === "[GNU v3](https://www.gnu.org/licenses/gpl-3.0)") {
            badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
        } else {
            badge = ""
        }
        return badge
    }

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
