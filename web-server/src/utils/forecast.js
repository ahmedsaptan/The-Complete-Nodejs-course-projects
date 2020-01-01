const request = require("request");
const chalk = require("chalk");

const forecast = (lat, long, callback) => {
    const url = `https://api.darksky.net/forecast/0e2937e31481dfdfe4169394c1b04da2/${lat}, ${long}`;
    request({
        url,
        json: true
    }, (error, response) => {

        if (error) {
            callback(chalk.bgRedBright.bgBlack("unable to connect to weather service"), null);
        } else if(response.body.error) {
            callback(chalk.bgBlack.red.inverse("unable to find location"), null);
        }
        else {
            const data = response.body;
            callback(null, { currently: data.currently,  summary: data.daily.summary});
        }

    })
};


module.exports = forecast;