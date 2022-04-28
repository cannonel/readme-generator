const fs = require('fs');

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.name}

## Description
${data.description}

## License
<a href='https://opensource.org/licenses/${data.license}'>
<img src='https://img.shields.io/badge/License-${data.license}-blue.svg' />
</a>

## Table of Contents
[Installation](#installation)<br>
[Usage](#usage)<br>
[License](#license)<br>
[Contributing](#contributing)<br>
[Tests](#tests)<br>
[Questions](#questions)<br>
----
## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contribution}

## Testing:
${data.test}

----
## Questions
Feedback and questions are always welcome!
[Github](https://github.com/${data.github})
[Email](mailto:${data.email})
`
};
module.exports = generateMarkdown;