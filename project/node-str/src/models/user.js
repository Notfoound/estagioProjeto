const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true
    },
    purchased: {
        type: Number
    }
});

module.exports = mongoose.model('User', schema);