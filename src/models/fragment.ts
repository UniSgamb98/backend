import mongoose, { Document, Schema } from 'mongoose';

export interface IFragment {
    title: string;
    description: string;
    nodes: [string];
    edges: [string];
}

export interface IFragmentModel extends IFragment, Document {}

const FragmentSchema: Schema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true},
        nodes: { type: [Schema.Types.ObjectId], ref: 'Node'},
        edges: { type: [Schema.Types.ObjectId], ref: 'Edge'}
    }, {versionKey: false});

export default mongoose.model<IFragmentModel>('Fragment', FragmentSchema);