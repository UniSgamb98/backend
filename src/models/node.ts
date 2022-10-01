import mongoose, { Document, Schema } from 'mongoose';

export interface INode {
    type: string;
    title: string;
    description: string; 
    difficulty: string;
    data:   { 
                question: string, 
                choice: string, 
            };
    reactflow:  {
                    id: string;
                    type: string;
                    position:   {
                                    x: number;
                                    y: number;
                                };
                    data:   {
                                    label: string
                            };
    };
}

export interface INodeModel extends INode, Document {}

const NodeSchema: Schema = new Schema(
    {
        type: { type: String, required: true },
        title: { type: String, required: true },
        description: { type: String, required: true },
        difficulty: { type: String, required: true },
        data: { type: Object, required: true },
        reactflow: { type: Object, required: true}
        
    }, {versionKey: false});

export default mongoose.model<INodeModel>('Node', NodeSchema);