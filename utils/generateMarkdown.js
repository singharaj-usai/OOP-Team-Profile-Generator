// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.name}

 
  ## ID
  ${data.id}
  
  ## Table of Contents
  -[ Name](#name)
  -[ ID](#id)
  -[ Username](#username)
  -[ Installation](#installation)
  -[ Usage](#usage)
  -[ License](#license)
  -[ Contributors](#contributors)
  -[ Tests](#tests)
  -[ Email](#email)

  ## Github Username
  ${data.email}
 
  
`;
}

module.exports = generateMarkdown;