const express=require('express');
const router=express.Router();
   
const forms=require("./form");
router.use('/travel',forms);

module.exports=router;


