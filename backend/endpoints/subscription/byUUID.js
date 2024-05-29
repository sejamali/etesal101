const express = require('express');
const { User, AllowedConfigTemplates, ConfigTemplate } = require('./../../database/config');

const router = express.Router();

router.get('/:uuid', async (req, res) =>
{
    const { uuid } = req.params;

    try
    {
        // Find the user by UUID
        const user = await User.findOne({
            where: { uuid },
            attributes: ['id', 'package_id']
        });

        if (!user)
        {
            return res.status(404).json({ error: 'User not found' });
        }

        // Find all config templates related to the user's package
        const allowedConfigTemplates = await AllowedConfigTemplates.findAll({
            where: { package_id: user.package_id }
        });

        // If no allowed config templates are found, return an empty array
        if (!allowedConfigTemplates.length)
        {
            return res.json([]);
        }

        // Extract the configTemplate_id from allowedConfigTemplates and find all related configTemplates
        const configTemplateIds = allowedConfigTemplates.map(act => act.configTemplate_id);
        const configTemplates = await ConfigTemplate.findAll({
            where: { id: configTemplateIds }
        });

        // Replace the UUID with "uuidtobereplaced" in the result
        const output = [];
        const updatedConfigTemplates = configTemplates.map(template =>
        {
            output.push(...[template.template]);
        });


        res.json(output.toString().replace("uuidtobereplaced", uuid));
    } catch (error)
    {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
