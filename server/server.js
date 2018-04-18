const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.static('server/public'));

// app.get('/monsters', (req, res) => {
//     res.send('monsters!');
// });

app.get('/', (req, res) => {
    res.send('monsters!');
});

app.listen(PORT, () => {
    console.log(`running on port: ${PORT}`);
});