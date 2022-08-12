const packageJsonFile = require('../../../package.json');
const chalk = require('chalk')

const run = () => {
  const version = packageJsonFile.version;
  console.log(chalk.gray(version));
}

module.exports = {
  name: '--version',
  run
}