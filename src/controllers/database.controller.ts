import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Fragment from '../models/fragment';

const createFragment = (req: Request, res: Response, next: NextFunction) => {
    const { title } = req.body;

    const fragment = new Fragment({
        title
    });

    return fragment
        .save()
        .then((fragment) => res.status(201).json({ fragment }))
        .catch((err) => res.status(500).json({ err }));
}
const getFragmentById = (req: Request, res: Response, next: NextFunction) => {
    const fragmentId = req.params.fragmentId;

    return Fragment.findById(fragmentId)
        .then((fragment) => (fragment ? res.status(200).json({ fragment }) : res.
        status(404).json({ message: 'Not Found'})))
        .catch((error) => res.status(500).json({ error }));
}

const getAllFragments = (req: Request, res: Response) => {
    return Fragment.find()
        .then((fragments) =>  res.status(200).json({ fragments }))
        .catch((error) => res.status(500).json({ error }));
}

/*
export async function saveFlow(req:Request, res:Response){

    console.log("ciao");


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
    
}*/

export default { 
    getFragmentById,
    getAllFragments,
    createFragment };