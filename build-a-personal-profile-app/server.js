/*
You should use Express to create an HTTP server that listens on port 3000.

You should have a GET route for the root path / that sends the response Welcome to Camper Bot's homepage!.

You should have a GET route for the /hobbies path that sends the response I cycle, go boating, and play guitar..

You should have a GET route for the /skills path that sends the response JavaScript, Node.js, and Express.js!.

You should have a GET route for the /api/profile path that sends a JSON response with a name property set to Camper Bot, a hobbies property containing an array of strings ['cycling', 'boating', 'guitar'], and a skills property containing an array of strings ['JavaScript', 'Node.js', 'Express.js'].
*/

const express = require("express");
const port = 3000;

const app = express();

app.get("/", (req, res) => {
    res.statusCode = 200;
    res.send("Welcome to Camper Bot's homepage!");
});

app.get("/hobbies", (req, res) => {
    res.statusCode = 200;
    res.send("I cycle, go boating, and play guitar.");
});

app.get("/skills", (req, res) => {
    res.statusCode = 200;
    res.send("JavaScript, Node.js, and Express.js!");
});

app.get("/api/profile", (req, res) => {
    const data = {
        name: "Camper Bot",
        hobbies: ['cycling', 'boating', 'guitar'],
        skills: ['JavaScript', 'Node.js', 'Express.js']
    };
    res.status(200).json(data);
});

app.listen(port, () => {
    console.log("Listening on port " + port); 
});
