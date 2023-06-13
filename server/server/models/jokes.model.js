const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema(
    {
        setup: {
            type: String,
            required: true,
            minLength: 1
        },
        punchline: {
            type: String,
            required: true,
            minLength: 1
        }
    },
    {timestamps: true}
);

const Joke = mongoose.model('joke', JokeSchema);

module.exports = Joke;
