const mongoose = require('mongoose');

const nodeSchema = new mongoose.Schema({
    type: {
        type: String,
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

    difficulty: {
        type: Number,
        required: true
    },
/*
    data: {
        type: {},
       // required: true
    },

    reactFlow: {
        type: {},
       // required: true
    }*/
});

const Node = mongoose.model('Node', nodeSchema);     //Blog e Blog deve essere scritto uguale
module.exports = Node;