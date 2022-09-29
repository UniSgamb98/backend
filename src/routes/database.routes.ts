//import express from 'express';
import * as DatabaseController from "../controllers/database.controller"

import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../configs/services/database.service";
import Flow from "../configs/models/model_flow";


const router = express.Router();
router.use(express.json());

router.get("/addFlow", DatabaseController.saveFlow)
router.get("/:id", DatabaseController.getFlowById)
/*
router.get("/", async (_req: Request, res: Response) => {
    try {
       const games = (await collections.flows.find({}).toArray()) as Flow[];

        res.status(200).send(games);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        
        const query = { _id: new ObjectId(id) };
        const game = (await collections.flows.findOne(query)) as Flow;

        if (game) {
            res.status(200).send(game);
        }
    } catch (error) {
        res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
    }
});
/*
router.get("/", async (_req: Request, res: Response) => {
    try {
       const games = (await collections.games.find({}).toArray()) as Game[];

        res.status(200).send(games);
    } catch (error) {
        res.status(500).send(error.message);
    }
});
*/
export default router;