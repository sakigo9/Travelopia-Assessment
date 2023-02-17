const express = require("express");
const cors = require("cors");
const ConnectDB=require('./config/mongoose')
require("dotenv").config();
ConnectDB();


const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


app.use(require('./routes'));

app.all("/*",function(req,res,next){
	// CORS headers
	res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	// Set custom headers for CORS
	res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key,Authorization');
	if (req.method == 'OPTIONS') {
		res.status(200).end();
	} else {

		// Mikael doesn't mention getting the uri using 'this' so maybe it's best to avoid it
		// please add a comment if you know why this might be bad
		console.log(req.headers.host + req.url);

		next();
	}
	next();
})



app.listen(process.env.PORT || 9000, () => {
	console.log("Server listening on port", process.env.PORT);
});
