const mongoose = require('mongoose')

const edgeSchema = new mongoose.Schema({

    type: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true
    },

    data: {
        type: {},
        required: true
    },

    reactFlow: {
        type: any,
        required: true
    }
});

const Edge = mongoose.model('Edge', edgeSchema);     //Blog e Blog deve essere scritto uguale
module.exports = Edge;