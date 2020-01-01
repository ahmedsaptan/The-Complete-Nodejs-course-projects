const mongoose = require("mongoose");

const {printError, printSuccess} = require("../../utils/utils");

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, (err, data) => {
    if (err) {
        return printError("Unable to connect to MongoDB");
    }

    printSuccess("Connected To MongoDB");
});





