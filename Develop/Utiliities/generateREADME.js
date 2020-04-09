
// writes the README content 
function generateReadMe(data) {

    const projectTitle = data.title.toLowerCase().split(" ").join("-");
    let projectUrl = `https://github.com/${data.github}/${projectTitle}`;
    let license ='';
    let licenseBadge ='';
   
    if (data.license !== "None") {
      licenseBadge =  `[![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)](${projectUrl})`;
      license =   `## License
  
      This project is licensed under the ${license} license.`
  
    }
  
    return `
  # ${data.title}


  ${licenseBadge}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents 
  
  * [Installation](#installation)
  
  * [Usage](#usage)
  
  * [License](#license)
  
  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)
  
  ## Installation
  
  To install necessary dependencies, run the following command:
  
  \`\`\`
  ${data.installation}
  \`\`\`
  
  ## Usage
  
  ${data.usage}
  
  ${license}
    
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  To run tests, run the following command:
  
  \`\`\`
  ${data.test}
  \`\`\`
  
  ## Questions
  
  <img src="${data.avatar_url}" alt="avatar" style="border-radius: 32px" width="60" />
  
  If you have any questions about the repo, open an issue or contact [${data.github}](${data.url}) directly at ${data.email1}.
  
  `;
  }
  
  module.exports = generateReadMe;
  