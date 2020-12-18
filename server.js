//Require dependencies 
const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

const directory = path.join(__dirname, "/public");
const database = path.join(__dirname, "/db/db.json");


//Server HTML Routes
app.get("/notes", function(request, response) {
    response.sendFile(path.join(directory, "notes.html"))
});

app.get("*", function (request, response) {
    response.sendFile(path.join(directory, "index.html"))
});


//Server API Routes

app.get("/api/notes", function(request, response) {
    response.sendFile(database);
});

//Post notes
app.post("/api/notes", function(request, response) {
    let prevNotes = JSON.parse(fs.readFileSync(database));

    let newNotes = request.body

    let noteID = (prevNotes.length).toString();
    newNotes.id = noteID;
    prevNotes.push (newNote)
})