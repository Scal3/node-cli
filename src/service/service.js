const chalk = require('chalk');
const Cli = require('./cli/index');
const { EXIT_CODES, USER_ARGUMENTS_NUMBER, ERROR_MESSAGES } = require('../../constants');

const userArg = process.argv[USER_ARGUMENTS_NUMBER];

// Проверка на наличие команды
if (!userArg || !Cli[userArg]) {
  const notFoundRedMessage = chalk.red(ERROR_MESSAGES.NOT_FOUND);
  console.log(notFoundRedMessage);
  process.exit(EXIT_CODES.failure);
}

// Запуск скрипта
Cli[userArg].run();
