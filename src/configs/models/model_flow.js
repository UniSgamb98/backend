const mongoose = require('mongoose');
//const Node = require('./model_node').Schema;
//const Edge = require('./model_edge').Schema;

const reqString = {
    type: String,
    required: true
}

const nodeSchema = new mongoose.Schema({
    type: reqString,

    title: reqString,

    description: reqString,

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

const flowSchema = new mongoose.Schema({

    title: reqString,

    description: reqString,
    nodes: [nodeSchema],

    //edges: [Edge]
});

const Flow = mongoose.model('Flow', flowSchema);     //Blog e Blog deve essere scritto uguale
module.exports = Flow;