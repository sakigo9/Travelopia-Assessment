const {
  getTravellersDataInteractor,
  createTravellersDataInteractor,
} = require("./interactor");

exports.getTravellersDataEntity = async (req) => {
  try {
    return await getTravellersDataInteractor();
  } catch (err) {
    console.log("Error inside getTravellersEntity");
    throw err;
  }
};

exports.createTravellersDataEntity = async (req) => {
  try {
    return await createTravellersDataInteractor(req.body);
  } catch (err) {
    console.log("Error inside createTravellersDataEntity");
    throw err;
  }
};
