const express = require('express');
const TravelBooking = require('./../models/Travellers');

const router = express.Router();

// Get all travel bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await TravelBooking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
