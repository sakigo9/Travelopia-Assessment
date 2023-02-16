const express = require("express");
const cors = require("cors");
require("dotenv").config();





app.listen(process.env.PORT || 9000, () => {
	console.log("Server listening on port", process.env.PORT);
});
