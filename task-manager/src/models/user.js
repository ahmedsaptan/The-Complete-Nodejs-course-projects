const mongoose = require("mongoose");
const validator = require("validator");


const User = mongoose.model("User", {
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error("Age Must Be a postive number")
            }
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Not Correct Email");
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if(value.toLowerCase().includes('password')) {
                throw new Error("Password can't contains password word");
            }
            if(value.length < 6) {
                throw new Error("can't less than 6 chars");
            }
        }
    }
});


module.exports = User;