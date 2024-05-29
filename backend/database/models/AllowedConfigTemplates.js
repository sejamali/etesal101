const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) =>
{
    // Define AllowedConfigTemplates model
    class AllowedConfigTemplates extends Model { }
    AllowedConfigTemplates.init({
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        configTemplate_id: { type: DataTypes.INTEGER, allowNull: false },
        package_id: { type: DataTypes.INTEGER, allowNull: false }
    }, {
        sequelize,
        modelName: 'AllowedConfigTemplates',
        tableName: 'allowedConfigTemplates'
    });
    return AllowedConfigTemplates;
}