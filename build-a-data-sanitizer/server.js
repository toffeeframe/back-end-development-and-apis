const express = require('express');
const path = require('path');
const { inputCleaner, inputValidator } = require('./middleware');

const app = express();
const port = 3000;

const pubdir = path.join(__dirname, 'public');

// Parse HTML form submissions
app.use(express.urlencoded({ extended: false }));

// Serve files from the public directory
app.use(express.static(pubdir, { index: false }));

app.get('/', (req, res) => {
    res.redirect('/form');
});

app.get('/form', (req, res) => {
    res.sendFile(path.join(pubdir, 'index.html'));
});

app.post(
    '/submit',
    inputCleaner,
    inputValidator,
    (req, res) => {
        res.send(`
            <h1>Submitted</h1>
            <p>Username: ${req.body.username}</p>
            <p>Comment: ${req.body.comment}</p>
        `);
    }
);

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
