//Require dependencies 
const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

const directory = path.join(__dirname, "/public");
const database = path.join(__dirname, "/db/db.json");

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(directory));

let notes = [];
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
    notes = fs.readFileSync(database);
    console.log(notes);
    notes = JSON.parse(notes);
    request.body.id = notes.length;
    notes.push(request.body);
    notes = JSON.stringify(notes);
    console.log(notes);
    
    //write file
    fs.writeFile(database, notes, function(error) {
        if(error) throw error;
    });
    response.json(JSON.parse(notes));
    
});