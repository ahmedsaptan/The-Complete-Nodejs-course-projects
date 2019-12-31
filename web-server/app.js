const path = require("path");

const express = require("express");

const publicPath = path.join(__dirname, 'public');

const app = express();


app.use(express.static(publicPath));

app.get("/weather", (req, res) => {
    res.send("Weather");
});

const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => {
    console.log("Server start at ", PORT);
});