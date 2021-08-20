const Sequelize = require('sequelize');
// Option 1: Passing parameters separately
const sequelize = new Sequelize('exo', 'root', 'root', {
  host: '127.0.0.1',
  dialect:  'mysql'
})
const initModels=require("../models/init-models");
const models=initModels(sequelize)
module.exports=models;