//Require dependencies 
const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

const directory = path.join(__dirname, "/public");
const database = path.join(__dirname, "/db/db.json");


//Server HTML Routes
app.get("/notes", function(req, res) {
    res.sendFile(path.join(directory, "notes.html"))
});