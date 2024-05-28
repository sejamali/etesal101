const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'example.db'
});


require('./models/User');
require('./models/Invoice');
require('./models/Package');
require('./models/AllowedConfigTemplates');
require('./models/ConfigTemplate');
require('./models/UserHistory');


// Define relationships
UserHistory.belongsTo(User, { foreignKey: 'user_id' });
UserHistory.belongsTo(Package, { foreignKey: 'package_id' });
UserHistory.belongsTo(Invoice, { foreignKey: 'invoice_id' });

User.belongsTo(Package, { foreignKey: 'package_id' });
User.belongsTo(Invoice, { foreignKey: 'invoice_id' });

Invoice.belongsTo(Package, { foreignKey: 'package_id' });

Package.belongsTo(AllowedConfigTemplates, { foreignKey: 'allowedConfigTemplates_id' });

AllowedConfigTemplates.belongsTo(ConfigTemplate, { foreignKey: 'configTemplate_id' });

// Sync models
const syncDatabase = async () =>
{
    try
    {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');

        // Sync all models
        await sequelize.sync();
        console.log("All models were synchronized successfully.");
    } catch (error)
    {
        console.error('Unable to connect to the database:', error);
    }
};

syncDatabase();

module.exports = {
    User,
    Invoice,
    Package,
    AllowedConfigTemplates,
    ConfigTemplate,
    UserHistory,
    sequelize
};