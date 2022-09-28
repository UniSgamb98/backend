import express from 'express';
import flowRouter from './flows.routes';
import executionRouter from './execution.routes';
import databaseRouter from './database.routes';

const router = express.Router();

router.use("/api/flows", flowRouter);
router.use("/api/execution", executionRouter);
router.use("/api/database", databaseRouter);

export default router;