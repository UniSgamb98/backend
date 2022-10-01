import express from 'express';
import DatabaseController from "../controllers/database.controller"

const router = express.Router();

//GET
router.get("/fragments", DatabaseController.getAllFragments);
router.get("/fragments/:fragmentId", DatabaseController.getFragmentById);
router.get("/nodes", DatabaseController.getAllNodes);
router.get("/nodes/:nodeId", DatabaseController.getFragmentById);
router.get("/edges", DatabaseController.getAllEdges);
router.get("/edges/:edgeId", DatabaseController.getEdgeById);


//POST
router.post("/fragments/create", DatabaseController.createFragment);
router.post("/nodes/create", DatabaseController.createNode);
router.post("/edges/create", DatabaseController.createEdge);


//PATCH
router.patch("/fragments/edit/:fragmentId", DatabaseController.editFragment);
router.patch("/nodes/edit/:nodeId", DatabaseController.editNode);
router.patch("/edges/edit/:edgeId", DatabaseController.editEdge);

//DELETE
router.delete("/fragments/delete/:fragmentId", DatabaseController.deleteFragment);
router.delete("/nodes/delete/:fragmentId", DatabaseController.deleteNode);
router.delete("/edges/delete/:edgeId", DatabaseController.deleteEdge);

export = router;