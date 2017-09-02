import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    title     : { type: String },
    author    : { type: String },
    id        : { type: String },
    date      : { type: String },
    description  : { type: String },
    status      : { type: Number },
});

mongoose.model('Task', TaskSchema);
