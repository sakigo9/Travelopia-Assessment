const express = require("express");
const cors = require("cors");
const ConnectDB=require('./config/mongoose')
require("dotenv").config();
ConnectDB();


const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

const routes=require("./routes");
app.use(routes);

app.all("/*",function(req,res,next){
	console.log("Host");
	next();
})



app.listen(process.env.PORT || 9000, () => {
	console.log("Server listening on port", process.env.PORT);
});
