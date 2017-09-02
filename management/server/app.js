import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { ObjectId } from 'mongodb';

import { serverPort } from './config.json';
import * as db from './utils/DataBaseUtils';


// Initialization of express application
const app = express();

// Set up connection of database
db.setUpConnection()


// Using bodyParser middleware
app.use( bodyParser.json() );

// Allow requests from any origin
app.use(cors({ origin: '*' }));

// RESTful api handlers
app.get('/tasks', (req, res) => {
    db.listTasks().then(data => res.send(data))
})
/*app.get('/tasks', (req, res) => {
    //db.listNotes().then(data => res.send(data));
    let url = "mongodb://localhost:27017/tasks";
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        db.collection("tasks").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.send(result);
            db.close();
        });
    });
});*/

/*app.get('/projects/:id', (req, res) => {
    //db.listNotes().then(data => res.send(data));
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var objectId = ObjectId(req.params.id);
        db.collection("projects").find({"_id": objectId}).toArray(function(err, result) {
            if (err) throw err;
            res.send(result);
            db.close();
        });
    });
});*/

/*app.post('/projects', (req, res) => {
    db.createNote(req.body).then(data => res.send(data));
});

app.delete('/projects/:id', (req, res) => {
    db.deleteNote(req.params.id).then(data => res.send(data));
});*/

const server = app.listen(serverPort, function() {
    console.log(`Server is up and running on port ${serverPort}`);
});
