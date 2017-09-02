import mongoose from "mongoose"
mongoose.set('debug', true)
import config from '../config.json'

import '../models/Task'

const Task = mongoose.model('Task')

export function setUpConnection() {
    mongoose.Promise = global.Promise
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`,{
        useMongoClient: true
    })
}

export function listTasks(id) {
    return Task.find()
}

export function createNote(data) {
    const note = new Note({
        title: data.title,
        text: data.text,
        color: data.color,
        createdAt: new Date()
    });

    return note.save()
}

export function deleteNote(id) {
    return Note.findById(id).remove();
}

