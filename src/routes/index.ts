import express from 'express';
import flowRouter from './flows.routes';
import executionRouter from './execution.routes';

//const databaseRouter = require('./database.routes');

const router = express.Router();

router.use("/api/flows", flowRouter);
router.use("/api/execution", executionRouter);
//router.use("/api/execution", databaseRouter);

export default router;