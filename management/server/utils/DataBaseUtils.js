import mongoose from "mongoose"
mongoose.set('debug', true)
import config from '../config.json'
import '../models/Task'

import '../models/User'


const Task = mongoose.model('Task')
const User = mongoose.model('User')

export function setUpConnection() {
    mongoose.Promise = global.Promise
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`,{
        useMongoClient: true
    })
}

export function listTasks(id) {
    return Task.find()
}

export function listUsers() {
    return User.find()
}

export function getUser(status) {
    return User.findOne({status: status}, function(err,obj) { return obj })
}

export function getUserById(id) {
    return User.findById(id, function (err, user) { return user } )
}

export function getUserByIdAndUpdate(id, status) {
    return User.findByIdAndUpdate(id, { $set: { status } }, {new: true})
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

