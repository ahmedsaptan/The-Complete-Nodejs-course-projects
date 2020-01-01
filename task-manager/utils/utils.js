const chalk = require("chalk");

const printError = (message) => {
    console.log(chalk.red.italic.bold.bgBlack.inverse(message));
};

const printSuccess = (message) => {
    console.log(chalk.green.italic.bold.bgBlack.inverse(message));
};

module.exports = {
    printError,
    printSuccess
};