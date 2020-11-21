const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create People Schema
const People = new Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
    sex: {
        type: String,
    },
    complexion: {
        type: String,
    },
    race: {
        type: String,
    },
    dateOfBirth: {
        type: Date,
    },
    phoneNumber: {
        type: String,
    },
    address: {
        type: String,
    },
    stateOfOrigin: {
        type: String,
    },
    nationality: {
        type: String,
    },
    dateGenerated: {
        type: Date,
        default: Date.now()
    },
});

module.exports = mongoose.model("People", People);