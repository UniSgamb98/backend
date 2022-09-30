import express from 'express';
import DatabaseController from "../controllers/database.controller"

const router = express.Router();

router.post("/create", DatabaseController.createFragment)
router.get("/get", DatabaseController.getAllFragments);
router.get("/:fragmentId", DatabaseController.getFragmentById);


export = router;