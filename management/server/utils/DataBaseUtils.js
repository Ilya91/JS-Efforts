import mongoose from "mongoose";

import config from '../config.json';

import '../models/Project';

const Project = mongoose.model('projects');

export function setUpConnection() {
    mongoose.Promise = global.Promise;
    mongoose.createConnection(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}

export function listNotes(id) {
    return Project.find();
}

export function createNote(data) {
    const note = new Project({
        title: data.title,
        text: data.text,
        color: data.color,
        createdAt: new Date()
    });

    return note.save();
}

export function deleteNote(id) {
    return Project.findById(id).remove();
}

