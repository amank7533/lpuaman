const express = require('express');
const hbs = require('hbs');
var app = express();
const port = 3000;

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


app.get('/home51', (req, res) => {
 res.render('home51.hbs', {
 pageTitle: 'Resume',
 info: 'For more info click on above link'
 });
});
app.get('/quali', (req, res) => {
 res.render('quali.hbs', {
 pageTitle: 'Qualification'
 });
});
app.get('/inter', (req, res) => {
 res.render('inter.hbs', {
 pageTitle: 'Internship'
 });
});
app.get('/tech', (req, res) => {
 res.render('tech.hbs', {
 pageTitle: 'Technical Skills'
 });
});
app.get('/achie', (req, res) => {
 res.render('achie.hbs', {
 pageTitle: 'Achievements'
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