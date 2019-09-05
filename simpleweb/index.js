const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello ok?');
});

app.listen('8080', () => {
    console.log('Listening 8080 port');
});
