const mongoose = require('mongoose');
const Node = require('./model_node').schema;
const Edge = require('./model_edge').schema;

const reqString = {
    type: String,
    required: true
}

const flowSchema = new mongoose.Schema({

    title: reqString,

    description: reqString,
    nodes: [Node],

    edges: [Edge]
});

const Flow = mongoose.model('Flow', flowSchema);     //Blog e Blog deve essere scritto uguale
module.exports = Flow;