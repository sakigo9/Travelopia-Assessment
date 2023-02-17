const express=require('express');
const router=express.Router();

const forms=require("./form");
router.use('/forms',forms);

module.exports=router;


