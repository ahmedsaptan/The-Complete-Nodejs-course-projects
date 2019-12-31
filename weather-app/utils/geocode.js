const request = require("request");
const chalk = require("chalk");

const geoCode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${ encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiYWhtYWRzYXB0YW4iLCJhIjoiY2swbzlyeXAxMDdqcTNlczg2bHNqbzBwaSJ9.jKeSUyX5s1aNZzjvaXAHhw&limit=1`;

    request({
        url,
        json: true
    }, (error, response) => {
        if (error) {
            callback(chalk.bgRedBright.bgBlack("unable to connect to weather service"), null);
        } else if(response.body.features.length === 0){
            callback(chalk.red.bgBlack.inverse("can't found location"), null);
        } else {
            const data = response.body;
            const place_name = data.features[0].place_name;
            const lat = data.features[0].center[1];
            const lang = data.features[0].center[0];
            callback(null, {lat, lang, place_name});
        }
    });
};

module.exports = geoCode;
