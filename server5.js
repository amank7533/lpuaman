const express = require('express');
const hbs = require('hbs');
var app = express();
const port = 3000;
//key - view engine
//value- hbs
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.get('/home', (req, res) => {
 res.render('home.hbs', {
 pageTitle: 'Home Page',
 WelcomeMessage: 'Welcome to my college',
 currentYear: new Date().getFullYear(),
 studentDetails: 'BCA'
 });
});
app.get('/about1', (req, res) => {
 res.render('about1.hbs', {
 pageTitle: 'About Page',
 StudentName: 'Aman Kumar',
 StudentLocation:'333/2, Pradhanmantri Bhawan',
 Course: 'BCA'
 });
});
app.get('/error', (req, res) => {
 res.send({
 errorMsg: 'Unable to find the page'
 });
});
app.listen(port, () => {
 console.log(`App listening on port number :- ${port}...!!!`);
});