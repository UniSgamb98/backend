const mongoose = require('mongoose')

const edgeSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    kind: {
        type: String,
        required: true
    },

    head: {
        type: String,
        required: true
    },

    tail: {
        type: String,
        required: true
    }
});

const Edge = mongoose.model('Edge', edgeSchema);     //Blog e Blog deve essere scritto uguale
module.exports = Edge;