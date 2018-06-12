const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    // res.send('<h1>Hello Express!</h1>');
    // res.send({
    //     name: 'Felipe',
    //     likes: [
    //         'developing',
    //         'training'
    //     ]
    // });
    res.render('home.hbs', {
        Welcome: 'Welcome to my page',
        currentYear: new Date().getFullYear(),
        pageTitle: 'Home page'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'This is the About Page',
        currentYear: new Date().getFullYear()
    });
});

app.get('/bad', (req,res) => {
    res.send({
        errorMessage: 'Unable to handle request'
    });
});

app.listen(3000, () => {
    console.log('Serve is up on port 3000');
});
