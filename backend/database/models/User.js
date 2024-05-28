const { DataTypes, Model } = require('sequelize');

// Define User model
class User extends Model { }
User.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    uuid: { type: DataTypes.STRING, allowNull: false },
    package_id: { type: DataTypes.INTEGER, allowNull: false },
    invoice_id: { type: DataTypes.INTEGER },
    username: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING },
    phone: { type: DataTypes.STRING },
    meta_contact: { type: DataTypes.STRING },
    role: { type: DataTypes.ENUM('superadmin', 'admin', 'client'), allowNull: false },
    status: { type: DataTypes.ENUM('active', 'inactive'), allowNull: false },
    start_date: { type: DataTypes.DATE, allowNull: false },
    expire_date: { type: DataTypes.DATE, allowNull: false },
    current_usage_gb: { type: DataTypes.INTEGER, allowNull: false }
}, {
    sequelize,
    modelName: 'User',
    tableName: 'user'
});