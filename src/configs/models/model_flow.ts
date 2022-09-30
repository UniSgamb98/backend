import { ObjectId } from "mongodb";
import mongoose, { Document, Schema } from "mongoose";

export interface IFlow {
    title: string;
 //   description: string;
}

export interface IFlowModel extends IFlow, Document {}

const FlowSchema: Schema = new Schema({
    title: {type: String, required: true},
   // description: {type: String, required: true}
}, {versionKey: false});

export default mongoose.model<IFlowModel>('Flow', FlowSchema);
/*
export default class Flow {
    constructor(
        public title: string, 
        public description: string, 
        public id?: ObjectId) {}
}
*/
/* DA AGGIUNGERE
    node[]: {
    },

    edge[]: {
    }*/