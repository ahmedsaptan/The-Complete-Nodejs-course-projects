
const geoCode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const chalk = require("chalk");

const address = process.argv[2];

if(address) {
    geoCode(address, (err, {lat, lang, place_name}) => {
        if(err) {
            console.log(err)
        } else {
            console.log(chalk.blue.bgBlack.inverse.bold(place_name));
            forecast(lat, lang, (err, {currently, summary}) => {
                console.log(chalk.yellow.bold.inverse.italic.bgBlack(currently.temperature));
                console.log(chalk.white.bold.inverse.italic.bgBlack(summary));
            });
        }
    });
} else {
    console.log(chalk.red.italic.inverse.bgBlack("No Address"));
}




