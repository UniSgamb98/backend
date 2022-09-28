const mongoose = require('mongoose');

const NodeSchema = new mongoose.Schema({ 
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

module.exports = mongoose.model('Node', NodeSchema);