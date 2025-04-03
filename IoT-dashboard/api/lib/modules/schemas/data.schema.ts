import { Schema, model } from 'mongoose';
import { IData } from "../models/data.model";
import { required } from 'joi';


export const DataSchema = new Schema({
    temperature: { type: Number, required: true },
    pressure: { type: Number, required: true },
    humidity: { type: Number, required: true },
    readingDate: { type: Number, required: false, default: Date.now },
    deviceId: { type: Number, required: true }
});


export default model<IData>('param', DataSchema);