const express = require("express");
const {
  getTravellersDataBoundary,
  createTravellersDataBoundary,
} = require("../controllers/traveller");
const router = express.Router();


// Get all travel bookings
router.get("/getData", async (req, res, next) => {
  try {
    let data = await getTravellersDataBoundary(req);
    return res.json({
      success: true,
      data: data,
    });
  } catch (err) {
    next(err);
  }
});

router.post("/createData", async(req,res,next)=>{
  try{
     const data=await createTravellersDataBoundary(req);
     return res.json({
      success: true,
      data: data,
    });
  }catch(err){
    next(err);
  }
})

module.exports = router;
