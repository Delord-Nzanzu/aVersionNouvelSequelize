var DataTypes = require("sequelize").DataTypes;
var _tbpersonne = require("./tbpersonne");

function initModels(sequelize) {
  var tbpersonne = _tbpersonne(sequelize, DataTypes);


  return {
    tbpersonne,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
