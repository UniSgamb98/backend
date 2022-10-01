import mongoose, { Document, Schema } from 'mongoose';

export interface IEdge {
    type: string;
    title: string;
    data:   {
                conditionkind: string;
            };
    reactflow:  {
                    id: string;
                    source: string;
                    target: string;
                    type: string;
                    markerend:  {
                                    type: string;
                                    width: number;
                                    height: number;
                                };
                };
}

export interface IEdgeModel extends IEdge, Document {}

const EdgeSchema: Schema = new Schema(
    {
        type:       { type: String, required: true },
        title:      { type: String, required: true },
        data:       { type: Object, required: true },
        reactflow:  { type: Object, required: true }
    }, {versionKey: false});

export default mongoose.model<IEdgeModel>('Edge', EdgeSchema);