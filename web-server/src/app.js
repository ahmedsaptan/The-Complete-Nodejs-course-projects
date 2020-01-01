const path = require("path");

const express = require("express");
const hbs = require("hbs");


const forecast = require("./utils/forecast");
const geoCode = require("./utils/geocode");

const publicPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, "../templates", "views");
const partialsPath = path.join(__dirname, "../templates", "partials");

const app = express();

app.set('view engine', 'hbs');
app.set("views", viewsPath);

hbs.registerPartials(partialsPath);

app.use(express.static(publicPath));


app.get("/", (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Ahmad Sayed'
    });
});

app.get("/help", (req, res) => {
    res.render("help", {
        title: "Help",
        helpText: "This is help text",
        name: 'Ahmad Sayed'
    })
});

app.get("/about", (req, res) => {
    res.render("about", {
        name: 'Ahmad Sayed',
        title: "About"
    })
});


app.get("/weather", (req, res) => {
    if(!req.query.address) {
        return res.send({
            errorMsg: "You Must Provide an Address"
        });
    }

    geoCode(req.query.address, (err, {lat, lang, place_name} = {lat: 0, place_name: '', lang: 0}) => {
        if(err) {
            return res.send({
                errorMsg: err
            })
        } else {
            forecast(lat, lang, (err, {currently, summary}) => {
                if(err) {
                    return res.send({
                        errorMsg: err
                    })
                }

                res.send({
                    currently,
                    summary,
                    place_name
                })
            });
        }
    });

});


app.get("/products", (req, res) => {
    if(!req.query.search) {
        return res.send({
            error: "You Must Provide a Search term"
        })
    }
    console.log(req.query.search);
    console.log(req.query.rating);
    res.send({
        products: []
    })
});


app.get("*", (req, res) => {
    res.render("notFound");
});

const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => {
    console.log("Server start at ", PORT);
});