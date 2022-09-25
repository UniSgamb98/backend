const mongoose = require('mongoose');

const nodeSchema = new mongoose.Schema({
    difficulty: {
        type: Number,
        required: true
    },

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    kind: {
        type: String,
        required: true
    },

    /*
    prerequisites: {
        type: String,
        required: false
    },

    effect: {
        type: String,
        required: false
    },
    */

    data: {
        type: String,
        required: true
    }
});

const Node = mongoose.model('Node', nodeSchema);     //Blog e Blog deve essere scritto uguale
module.exports = Node;