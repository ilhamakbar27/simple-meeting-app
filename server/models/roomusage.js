'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RoomUsage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    
    static associate(models) {
      this.belongsTo(models.Client, { foreignKey: "ClientId" })
      this.belongsTo(models.Room, { foreignKey: "RoomId" })
    }
  }
  RoomUsage.init({
    ClientId: DataTypes.INTEGER,
    RoomId: DataTypes.INTEGER,
    startTime: DataTypes.STRING,
    endTime: DataTypes.STRING,
    bookingDate: DataTypes.DATE,
    quotaUsed: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'RoomUsage',
  });
  return RoomUsage;
};