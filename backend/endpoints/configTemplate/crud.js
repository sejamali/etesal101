const express = require('express');
const { ConfigTemplate } = require('../../database/models/ConfigTemplate');

const router = express.Router();

// GET all configTemplates
router.get('/all', async (req, res) =>
{
    try
    {
        const configTemplates = await ConfigTemplate.findAll();
        res.json(configTemplates);
    } catch (error)
    {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// GET configTemplate by ID
router.get('/:id', async (req, res) =>
{
    try
    {
        const configTemplate = await ConfigTemplate.findByPk(req.params.id);
        if (!configTemplate)
        {
            return res.status(404).json({ error: 'Config template not found' });
        }
        res.json(configTemplate);
    } catch (error)
    {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Create configTemplate
router.post('/', async (req, res) =>
{
    try
    {
        const configTemplate = await ConfigTemplate.create(req.body);
        res.status(201).json(configTemplate);
    } catch (error)
    {
        res.status(400).json({ error: error.message });
    }
});

// Update configTemplate by ID
router.put('/:id', async (req, res) =>
{
    try
    {
        const configTemplate = await ConfigTemplate.findByPk(req.params.id);
        if (!configTemplate)
        {
            return res.status(404).json({ error: 'Config template not found' });
        }
        await configTemplate.update(req.body);
        res.json(configTemplate);
    } catch (error)
    {
        res.status(400).json({ error: error.message });
    }
});

// Delete configTemplate by ID
router.delete('/:id', async (req, res) =>
{
    try
    {
        const configTemplate = await ConfigTemplate.findByPk(req.params.id);
        if (!configTemplate)
        {
            return res.status(404).json({ error: 'Config template not found' });
        }
        await configTemplate.destroy();
        res.status(204).send();
    } catch (error)
    {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
