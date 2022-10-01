import { Request, Response } from 'express';
import Fragment from '../models/fragment';
import Node from '../models/node';
import Edge from '../models/edge';

// FRAGMENT FUNCTIONS
const createFragment = (req: Request, res: Response) => {
    const { title, description, nodes, edges } = req.body;

    const fragment = new Fragment({
        title,
        description,
        nodes,
        //edges
    });

    return fragment
        .save()
        .then((fragment) => res.status(201).json({ fragment }))
        .catch((err) => res.status(500).json({ err }));
};

const getFragmentById = (req: Request, res: Response) => {
    const fragmentId = req.params.fragmentId;

    return Fragment.findById(fragmentId)
        .then((fragment) => (fragment ? res.status(200).json({ fragment }) : res.
        status(404).json({ message: 'Not Found'})))
        .catch((error) => res.status(500).json({ error }));
};

const getAllFragments = (req: Request, res: Response) => {
    return Fragment.find()
        .then((fragments) =>  res.status(200).json({ fragments }))
        .catch((error) => res.status(500).json({ error }));
};

const editFragment = (req: Request, res: Response) => {
    const fragmentId = req.params.fragmentId;

    return Fragment.findById(fragmentId)
        .then((fragment) => {
            if (fragment) {
                fragment.set(req.body);

                return fragment
                    .save()
                    .then((fragment) => res.status(201).json({ fragment }))
                    .catch((err) => res.status(500).json({ err }));
            } else {
                res.status(404).json({ message: 'Not Found' });
            }
        })
        .catch((err) => res.status(500).json({ err }));
};

const deleteFragment = (req: Request, res: Response) => {
    const fragmentId = req.params.fragmentId;

    return Fragment.findByIdAndDelete(fragmentId)
        .then((fragment) => (fragment ? res.status(201).json({ message: 'Deleted fragment with id', fragmentId }) : res.status(404)
        .json({ message: 'Fragment not found' })))
        .catch((err) => res.status(500).json({ err }));
};

//NODES FUNCTIONS
const createNode = (req: Request, res: Response) => {
    const { type, title, description, difficulty, data, reactflow} = req.body;

    const node = new Node({
        type,
        title,
        description,
        difficulty,
        data,
        reactflow
    });

    return node
        .save()
        .then((node) => res.status(201).json({ node }))
        .catch((err) => res.status(500).json({ err }));
};

//EDGE FUNCTIONS
const createEdge = (req: Request, res: Response) => {
    const { type, title, data, reactflow} = req.body;

    const node = new Edge({
        type,
        title,
        data,
        reactflow
    });

    return node
        .save()
        .then((node) => res.status(201).json({ node }))
        .catch((err) => res.status(500).json({ err }));
};

export default 
{ 
    createFragment,
    createNode,
    createEdge,

    getFragmentById,
    getAllFragments,

    editFragment,

    deleteFragment 
};