import { Request, Response } from "express";
//const Node = require('../configs/models/model_node');
//const Edge = require('../configs/models/model_edge');
const Flow = require('../configs/models/model_flow');

export async function saveFlow(req:Request, res:Response){

    const flow = new Flow({
        title:          "test flow",
        description:    "req.body.description",
        nodes: [{   type: 'multipleChoiceQuestionNode',
                    title: 'Node 1',
                    description: 'Some description',
                    difficulty: 1,
                    data: 
                    { 
                        question: "Test", 
                        isChoiceCorrect: [false], 
                        choices: ["Choice test"] 
                    },
                    reactFlow: 
                    {
                        id: '1',
                        type: "multipleChoiceQuestionNode",
                        position: { x: 250, y: 0 },
                        data: { label: 'Multiple Choice Question' },
                    }
                },
                {   type: 'multipleChoiceQuestionNode',
                    title: 'Node 2',
                    description: 'Some description',
                    difficulty: 3,
                    data: 
                    { 
                        question: "Test", 
                        isChoiceCorrect: [false], 
                        choices: ["Choice test"] 
                    },
                    reactFlow: 
                    {
                        id: '2',
                        type: "multipleChoiceQuestionNode",
                        position: { x: 250, y: 200 },
                        data: { label: 'Multiple Choice Question' },
                    }
                }],
        edges: []
        
    });

    try{
        const savedFlow = await flow.save();
        res.json(savedFlow);
    }
    catch(err){
        res.json({ message: err});
    }
    
}


//ESTENSIONE JAVASCRIPT 
/*
const mongoHelper = require('../modules/mongoHelper/mongoHelper')
const ObjectId = require('mongodb').ObjectID;
const Node = require('../configs/models/model_node');
const Edge = require('../configs/models/model_edge');
const Flow = require('../configs/models/model_flow');

let db = ( () => mongoHelper.getConnection())();
const collection_nodes = ( () => db.collection("node"))();
const collection_edges = ( () => db.collection("edge"))();
const collection_flows = ( () => db.collection("flow"))();

const getAllFlows = async ()=> await collection_flows.find().toArray().then(data => data);

const getFlowByID = async (flowID) => {
    let data = { "_id": ObjectId(flowID) }

    const result = await collection_flows.findOne(data).then(flow => {
        console.log("[DBController] getFlowByID: trovato flow con dati =>", flow);
        return flow;
    });
    return result;
}

export async function getInitialExercise(req: Request<{}, any, GetInitialExerciseBody>, res: Response) {


const saveFlow = async (req, res) => 
{
    const flow = new Flow({
        title:          "test flow",
        description:    "req.body.description",
        
        nodes: [{   type: 'multipleChoiceQuestionNode',
                    title: 'Node 1',
                    description: 'Some description',
                    difficulty: 1,
                    data: 
                    { 
                        question: "Test", 
                        isChoiceCorrect: [false], 
                        choices: ["Choice test"] 
                    },
                    reactFlow: 
                    {
                        id: '1',
                        type: "multipleChoiceQuestionNode",
                        position: { x: 250, y: 0 },
                        data: { label: 'Multiple Choice Question' },
                    }
                },
                {   type: 'multipleChoiceQuestionNode',
                    title: 'Node 2',
                    description: 'Some description',
                    difficulty: 3,
                    data: 
                    { 
                        question: "Test", 
                        isChoiceCorrect: [false], 
                        choices: ["Choice test"] 
                    },
                    reactFlow: 
                    {
                        id: '2',
                        type: "multipleChoiceQuestionNode",
                        position: { x: 250, y: 200 },
                        data: { label: 'Multiple Choice Question' },
                    }
                }],
        edges: []
        
    });

    try{
        const savedFlow = await flow.save();
        res.json(savedFlow);
    }
    catch(err){
        res.json({ message: err});
    }
}



module.exports = {
    getAllFlows,
    getFlowByID,
    saveFlow
}*/