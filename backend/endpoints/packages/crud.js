const express = require('express');
const { Package } = require('./../../database/config');

const router = express.Router();

// GET all packages
router.get('/all', async (req, res) =>
{
    try
    {
        const packages = await Package.findAll();
        res.json(packages);
    } catch (error)
    {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// GET package by ID
router.get('/:id', async (req, res) =>
{
    try
    {
        const package = await Package.findByPk(req.params.id);
        if (!package)
        {
            return res.status(404).json({ error: 'Package not found' });
        }
        res.json(package);
    } catch (error)
    {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Create package
router.post('/', async (req, res) =>
{
    try
    {
        const package = await Package.create(req.body);
        res.status(201).json(package);
    } catch (error)
    {
        res.status(400).json({ error: error.message });
    }
});

// Update package by ID
router.put('/:id', async (req, res) =>
{
    try
    {
        const package = await Package.findByPk(req.params.id);
        if (!package)
        {
            return res.status(404).json({ error: 'Package not found' });
        }
        await package.update(req.body);
        res.json(package);
    } catch (error)
    {
        res.status(400).json({ error: error.message });
    }
});

// Delete package by ID
router.delete('/:id', async (req, res) =>
{
    try
    {
        const package = await Package.findByPk(req.params.id);
        if (!package)
        {
            return res.status(404).json({ error: 'Package not found' });
        }
        await package.destroy();
        res.status(204).send();
    } catch (error)
    {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
