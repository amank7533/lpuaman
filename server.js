const express = require('express');
var app = express();
const port=3000;
app.get('/', (req, res)=>{    //req - request res- response
   res.send('<h1>Hello Everyone................I am king of this world</h1>');
});

//listening the app in port no -3000
app.listen(port, () =>{
	console.log(`App listening on port number :- ${port}.................!!!`);
});