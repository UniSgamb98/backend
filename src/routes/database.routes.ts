import express from 'express';
import * as DatabaseController from "../controllers/database.controller"

const router = express.Router();

router.get("/addFlow", DatabaseController.saveFlow)

export default router;