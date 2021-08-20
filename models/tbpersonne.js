const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbpersonne', {
    idpersonne: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    nom: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    postnom: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    prenom: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    sexe: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbpersonne',
    timestamps: false,
    defaultScope: {
      attributes: { exclude: ["updatedAt", "createAt"] },
    },
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idpersonne" },
        ]
      },
    ]
  });
};
