const { DataTypes, Model } = require('sequelize');
const sequelize = require('./../config').sequelize;

module.exports = (sequelize) =>
{
    // Define ConfigTemplate model
    class ConfigTemplate extends Model { }
    ConfigTemplate.init({
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        template: { type: DataTypes.TEXT, allowNull: false }
    }, {
        sequelize,
        modelName: 'ConfigTemplate',
        tableName: 'configTemplate'
    });
    return ConfigTemplate;
}