const { DataTypes, Model } = require('sequelize');

// Define Invoice model
class Invoice extends Model { }
Invoice.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    package_id: { type: DataTypes.INTEGER },
    status: { type: DataTypes.ENUM('paid', 'pending'), allowNull: false }
}, {
    sequelize,
    modelName: 'Invoice',
    tableName: 'invoice'
});