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

app.listen(3000);