const express=require('express');

var app=express();
const port=3000;
app.get('/',(req, res)=>{
	res.send({
		name:'IPS Aman Kumar Patel',
		likes:['decide','commit','succeed']
	});
});
app.get('/about',(req, res)=>{
	res.send('About Page');
});
app.get('/error',(req, res)=>{
	res.send({
		errorMsg: 'Unable to find the page'
	});
});
app.listen(port, () =>{
	console.log(`App listening on port number :- ${port}.................!!!`);
});