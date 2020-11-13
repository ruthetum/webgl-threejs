const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('./static'));

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/cube', (req, res) => {
    res.render('cube');
});

app.get('/table', (req, res) => {
    res.render('table');
});

app.get('/space', (req, res) => {
    res.render('space');
});

app.get('/mars', (req, res) => {
    res.render('mars');
});

app.get('/tunnel', (req, res) => {
    res.render('tunnel');
});

app.get('/room', (req, res) => {
    res.render('room');
})

app.get('/candle', (req, res) => {
    res.render('candle');
})

app.get('/mars-outside', (req, res) => {
    res.render('mars-outside');
})

app.get('/text', (req, res) => {
    res.render('text');
})

app.listen(3000);