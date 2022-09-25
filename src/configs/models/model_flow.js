const mongoose = require('mongoose');
const Node = require('./model_node').Schema;
const Edge = require('./model_edge').Schema;


const flowSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    description: {

    },
    nodes: [Node],

    edges: [Edge]
});

const Flow = mongoose.model('Flow', flowSchema);     //Blog e Blog deve essere scritto uguale
module.exports = Flow;