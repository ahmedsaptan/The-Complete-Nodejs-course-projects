const mongoose = require("mongoose");
const validator = require("validator");

const {printError, printSuccess} = require("../../utils/utils");

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, (err, data) => {
    if (err) {
        return printError("Unable to connect to MongoDB");
    }

    printSuccess("Connected To MongoDB");
});


const User = mongoose.model("User", {
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        validate(value) {
            if (value < 0) {
                throw new Error("Age Must Be a postive number")
            }
        }
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Not Correct Email");
            }
        }
    }
});

const Task = mongoose.model("Task", {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
});

const me = new User(
    {
        name: 'Ahmad',
        email: "ahmed.sayed@yahoo.com",
        age: 23
    }
);

me.save().then(user => {
    console.log(user)
}).catch(err => {
    console.log(err);
});

// const task1 = new Task({description: "this is first description", completed: true});
// task1.save().then((task) => {
//     console.log(task);
// }).catch(err => {
//     console.log(err);
// });