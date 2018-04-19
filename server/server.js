const express = require('express');
const app = express();
const PORT = 5000;

const monstersArray = require('./public/monsters');

app.use(express.static('server/public'));

app.get('/monster', (req, res) => {
    res.send(monstersArray);
});

app.listen(PORT, () => {
    console.log(`running on port: ${PORT}`);
});