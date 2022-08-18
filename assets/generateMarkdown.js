// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== 'none') {
    return `![Github License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== 'none') {
    return `[License](#license)`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== 'none') {
    return `## License`;
  }
  return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `#Project Name: ${answers.project}
  
#Github Live Link:

[Live Link](${answers.live})

#Github Repository Link:

[Github Repo Link](${answers.repo})

## Description

### User Story:

${answers.story}

${answers.motivation}

${answers.problem}

${answers.learn}

${answers.standout}

${answers.challengesWins}

## Installation

\`${answers.requirements}\`

## Usage

[tutorial](${answers.tutorials})

## Credits

${answers.constributors}

## Licenses

## Tests

`;
}

module.exports = generateMarkdown;
