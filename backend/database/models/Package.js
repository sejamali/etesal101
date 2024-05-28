const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) =>
{
    // Define Package model
    class Package extends Model { }
    Package.init({
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        allowedConfigTemplates_id: { type: DataTypes.INTEGER, allowNull: false },
        name: { type: DataTypes.STRING, allowNull: false },
        days: { type: DataTypes.INTEGER, allowNull: false },
        max_usage_gb: { type: DataTypes.INTEGER, allowNull: false },
        price: { type: DataTypes.INTEGER },
        status: { type: DataTypes.ENUM('active', 'inactive'), allowNull: false }
    }, {
        sequelize,
        modelName: 'Package',
        tableName: 'package'
    });
    return Package;
}