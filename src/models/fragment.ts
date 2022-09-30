import mongoose, { Document, Schema } from 'mongoose';

export interface IFragment {
    title: string;
}

export interface IFragmentModel extends IFragment, Document {}

const FragmentSchema: Schema = new Schema(
    {
        title: { type: String, required: true }
    }, {versionKey: false});

export default mongoose.model<IFragmentModel>('Fragment', FragmentSchema);