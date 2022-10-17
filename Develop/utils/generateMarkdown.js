// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    mpl: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    gplv3: '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }
  return badges[license]
}

console.log(renderLicenseBadge('mit'))

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    mit: '[MIT](https://opensource.org/licenses/MIT)', 
    mpl: '[MPL](https://opensource.org/licenses/MPL-2.0)', 
    gplv3: '[GPL v3](https://www.gnu.org/licenses/gpl-3.0)'
  }
  return licenseLinks[license]
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){
    return `Licensed udner the ${renderLicenseLink(license)} license`
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function createMarkdown(data) {
  return `# ${data.Title}
${console.log(data.license)}
  ${renderLicenseBadge(data.License)}

  ## Table of Contents 
  - [Project Description](#Description)
  - [Usage](#Usage)
  - [Contribution](#Contribution)
  - [Installation](#Installation)
  - [Questions](#Questions)
  - [License](#License)

  ## Description
  ${data.Description}

  ## Usage 
  ${data.Instructions}

  ## Installation 
  ${data.Installation}

  ## Contribution 
  ${data.Contribution}

  ## Questions 
  ${data.Email}

  ## License 
  ${renderLicenseSection(data.License)}
`;
}

module.exports = createMarkdown;
