// Function to render license badge
function renderLicenseBadge(license) {
  if (license !== 'no license') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    } else{
      return '';
    }
  } 

// Function to render license link
function renderLicenseLink(license) {
  if (license !== 'no license') {
    return `[${license}](https://choosealicense.com/licenses/${license})`;
    } else {
      return ' ';
    }
}

// Function to render license section
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

// Funtion to generate README markdown
function generateMarkdown(data) {

  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table-of-Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
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

  ## [License](#table-of-contents)
  ${renderLicenseBadge(data.license)}
  
  ## [Questions](#table-of-contents)

  If you have any questions about this project, please contact me using the following links:

  [GitHub](https://github.com/${data.github})

  [Email: ${data.email}](mailto:${data.email})
`;
}

// Allows index to import markdown
module.exports = generateMarkdown;
