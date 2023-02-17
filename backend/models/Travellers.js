const mongoose = require('mongoose');

const travelBookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  numTravelers: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    required: true
  }
});

const TravelBooking = mongoose.model('TravelBooking', travelBookingSchema);

module.exports = TravelBooking;
