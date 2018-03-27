const express = require('express');
const http = require('http')
const path = require('path');

const api = 'https://swivylback.herokuapp.com/api'

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || '3005'
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log('running!!!!'))