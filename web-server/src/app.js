const path = require("path");

const express = require("express");
const hbs = require("hbs");

const publicPath = path.join(__dirname, 'public');
const viewsPath = path.join(__dirname, "templates", "views");
const partialsPath = path.join(__dirname, "templates", "partials");

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
        name: 'Ahmad Sayed'
    })
});

app.get("/about", (req, res) => {
    res.render("about", {
        name: 'Ahmad Sayed'
    })
});

app.get("/weather", (req, res) => {
    res.send("Weather");
});

app.get("*", (req, res) => {
    res.render("notFound");
});

const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => {
    console.log("Server start at ", PORT);
});