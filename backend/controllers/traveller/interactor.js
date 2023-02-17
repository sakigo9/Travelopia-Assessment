const TravellerModal = require('../../models/Travellers');

exports.getTravellersDataInteractor = async () => {
  try {
    return await TravellerModal.find({});
  } catch (err) {
    throw err;
  }
};

exports.createTravellersDataInteractor = async data => {
    try {
      return await TravellerModal.create(data);
    } catch (err) {
      throw err;
    }
  };