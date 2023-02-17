const {
   getTravellersDataEntity,
   createTravellersDataEntity
} = require('./entity');

exports.getTravellersDataBoundary= async req=>{
    return getTravellersDataEntity(req);
}

exports.createTravellersDataBoundary = async req=>{
    return createTravellersDataEntity(req);
}