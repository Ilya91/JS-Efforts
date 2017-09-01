import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    title     : { type: String },
    author    : { type: String }
});

mongoose.model('projects', ProjectSchema);
