import { Request, Response } from "express";
import { flows } from "../models/flow.model";

type GetInitialExerciseBody = { flowId: string }
export async function getInitialExercise(req: Request<{}, any, GetInitialExerciseBody>, res: Response) {
    const { flowId } = req.body;
    const currentFlow = flows[flowId];

    if (!currentFlow) {
        res.status(404).send();
        return;
    }

    const nodesWithIncomingEdges = new Set(currentFlow.edges.map(edge => currentFlow.nodes.find(node => node.reactFlow.id === edge.reactFlow.target)));
    const nodesWithoutIncomingEdges = currentFlow.nodes.filter(node => !nodesWithIncomingEdges.has(node));
    const firstNode = nodesWithoutIncomingEdges[Math.floor(Math.random() * nodesWithoutIncomingEdges.length)];

    if (!firstNode) {
        res.status(404).send();
        return;
    }

    res.status(200).json(firstNode);
}

type GetNextExerciseBody = {
    flowId: string;
    satisfiedConditions: string[];
}
export async function getNextExercise(req: Request<{}, any, GetNextExerciseBody>, res: Response) {
    const { flowId, satisfiedConditions } = req.body;
    const currentFlow = flows[flowId];

    if (!currentFlow) {
        res.status(404).send();
        return;
    }

    const satisfiedEdges = currentFlow.edges.filter(edge => satisfiedConditions.includes(edge.reactFlow.id));
    const possibleNextNodes = satisfiedEdges.map(edge => currentFlow.nodes.find(node => node.reactFlow.id === edge.reactFlow.target));
    const nextNode = possibleNextNodes[Math.floor(Math.random() * possibleNextNodes.length)];

    if (!nextNode) {
        res.status(404).send();
        return;
    }

    res.status(200).json(nextNode);
}