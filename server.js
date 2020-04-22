const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3001

// app.use('/', express.static(path.join(__dirname, 'public')))

// Serve any static files
app.use(express.static(path.join(__dirname, 'public')));
// Handle React routing, return all requests to React app
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => console.log("Listening on Port", port)) 