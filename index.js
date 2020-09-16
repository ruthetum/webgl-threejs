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

app.get('/space', (req, res) => {
    res.render('space');
});

app.listen(3000);