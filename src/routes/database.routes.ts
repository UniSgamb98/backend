import express from 'express';
import DatabaseController from "../controllers/database.controller"

const router = express.Router();

//GET
router.get("/fragments", DatabaseController.getAllFragments);
router.get("/fragments/:fragmentId", DatabaseController.getFragmentById);

//POST
router.post("/create", DatabaseController.createFragment);

//PATCH
router.patch("/edit/:fragmentId", DatabaseController.editFragment);

//DELETE
router.delete("/delete/:fragmentId", DatabaseController.deleteFragment);


export = router;