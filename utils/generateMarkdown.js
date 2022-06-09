function renderLicenseBadge(license) {
  if (license !== 'no license') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    } else{
      return '';
    }
  } 


function renderLicenseLink(license) {
  if (license !== 'no license') {
    return `[${license}](https://choosealicense.com/licenses/${license})`;
    } else {
      return ' ';
    }
}


function renderLicenseSection(license) {
  if (license !== 'no license') {
    return `
    ## [License](#table-of-contents)
    The application is covered under the following license:
    ${renderLicenseLink(license)}
      `;
    } else {
      return ' ';
    }
}

function renderLicenseTOC(license) {
  if (license !== 'no license') {
  return `
  * [License](#license)`;
  } else {
    return ' ';
  }
 }

function generateMarkdown(data) {

  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table-of-Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseTOC(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## [Description](#table-of-contents) 
  ${data.description}

  ## [Installation](#table-of-contents) 
  ${data.install}
  
  ## [Usage](#table-of-contents) 
  ${data.usage}

  ## [Contributing](#table-of-contents)
  ${data.contributing}

  ## [Tests](#table-of-contents)
  ${data.test}

  ## [Questions](#table-of-contents)

  If you have any questions about this project, please contact me using the following links:

  [GitHub](https://github.com/${data.github})

  [Email: ${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
