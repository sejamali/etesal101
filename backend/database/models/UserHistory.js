const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) =>
{
    // Define UserHistory model
    class UserHistory extends Model { }
    UserHistory.init({
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        user_id: { type: DataTypes.INTEGER, allowNull: false },
        package_id: { type: DataTypes.INTEGER },
        invoice_id: { type: DataTypes.INTEGER },
        action: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.TEXT },
        metadata: { type: DataTypes.TEXT }
    }, {
        sequelize,
        modelName: 'UserHistory',
        tableName: 'userHistory'
    });
    return UserHistory;
}