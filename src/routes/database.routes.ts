//import express from 'express';
import * as DatabaseController from "../controllers/database.controller"

import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../configs/services/database.service";
import Flow from "../configs/models/model_flow";

const router = express.Router();

router.get("/addFlow", DatabaseController.saveFlow)
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