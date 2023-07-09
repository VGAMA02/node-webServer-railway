const express = require('express');
const hbs = require('hbs');
require('dotenv').config();
const app = express();
const port = process.env.PORT;


// Handlebars
app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
//Servir contenido estatico
app.use(express.static('public')); //MIDDLEWARE
/* app.get('/', (req,res) => { //con el middleware esto ya no es necesarioo
    res.send('Home page')
}); */

app.get('/', (req,res) => {
    res.render('home',{
        nombre: 'Gama',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', (req,res) => {
    res.render('generic',{
        nombre: 'Gama',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', (req,res) => {
    res.render('elements',{
        nombre: 'Gama',
        titulo: 'Curso de Node'
    });
});
app.get('*', (req,res)=> {
    res.sendFile(__dirname + '/public/404.html');
});
app.listen(port);

console.log('escuchando en el puerto',8080);