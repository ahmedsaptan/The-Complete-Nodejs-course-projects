
const https = require("https");

const url = `https://api.darksky.net/forecast/0e2937e31481dfdfe4169394c1b04da2/40,-75`;

const request = https.request(url, (response) => {

    let data = '';

    response.on('data', (chunk) => {
        // data += chunk;
        // console.log(chunk);
        data += chunk.toString();
    });

    response.on('end', ()=> {
        console.log(JSON.parse(data));

    })
});

request.end();