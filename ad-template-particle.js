const express = require('express');
const hbs = require('hbs');
var app = express();
const fs=require('fs');
const port = 3000;
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
//add express middle
app.use((req, res, next)=>{
	var currentTime=new Date().toString();  //toString()- to have readable string
	console.log(`Timestamp is- ${currentTime}`);
	console.log(`Request Method is- ${req.method}`);
	console.log(`URl Visited is- ${req.url}`);

//stroing to a file
var storedata= `${currentTime} ${req.method} ${req.url}`;
fs.appendFile('savedata.log', storedata + '\n', (err) =>{
	if(err){
		console.log('Error Found');
	}
});
next();
});
//request a page using  middleware
app.use((req, res, next) =>{
	res.render('undermain.hbs');
})
	
app.get('/', (req, res) => {
 res.render('home51.hbs', {
 pageTitle: 'Resume',
 info: 'For more info click on above link'
 });
});
app.get('/about51', (req, res) => {
 res.render('about51.hbs', {
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