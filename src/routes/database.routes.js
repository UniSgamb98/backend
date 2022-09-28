const express = require('express');
const DatabaseController = require('../controllers/database.controller')
//import * as DatabaseController from "../controllers/database.controller";

const router = express.Router();

router.post("/addFlow", DatabaseController.saveFlow)

module.exports = { router };