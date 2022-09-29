import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../configs/services/database.service";
//const Node = require('../configs/models/model_node');
//const Edge = require('../configs/models/model_edge');
import Flow from "../configs/models/model_flow";



export async function getFlowById(req:Request< { id: string }>, res: Response){
    console.log("whack")
    const id = req.params.id;


    try {
        
        const query = { _id: new ObjectId(id) };
        const game = (await collections.flows.findOne(query)) as Flow;

        if (game) {
            res.status(200).send(game);
        }
    } catch (error) {
        res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
    }
}

export async function saveFlow(req:Request, res:Response){

    console.log("ciao");

/*
    const flow = new Flow({
        title:          'test flow',
        description:    'req.body.description',
        /*nodes: [{   type: 'multipleChoiceQuestionNode',
                    title: 'Node 1',
                    description: 'Some description',
                    difficulty: 1,
                    /*
                    data: 
                    { 
                        question: 'Test', 
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
                    /*
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
    */
}