// recipeRoutes.js

const express = require('express');
const Recipe = require('../models/Recipe');

const router = express.Router();

// Create a recipe
router.post('/', async (req, res, next) => {
    try {
        const recipe = new Recipe(req.body);
        await recipe.save();
        res.status(201).send('Recipe created successfully');
    } catch (error) {
        console.error('Error creating recipe:', error);
        next(error);
    }
});

// Get all recipes
router.get('/', async (req, res, next) => {
    try {
        const recipes = await Recipe.find();
        res.status(200).json(recipes);
    } catch (error) {
        console.error('Error fetching recipes:', error);
        next(error);
    }
});

// Get a recipe by ID
router.get('/:id', async (req, res, next) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            return res.status(404).send('Recipe not found');
        }
        res.status(200).json(recipe);
    } catch (error) {
        console.error('Error fetching recipe:', error);
        next(error);
    }
});

// Update a recipe by ID
router.put('/:id', async (req, res, next) => {
    try {
        const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!recipe) {
            return res.status(404).send('Recipe not found');
        }
        res.status(200).send('Recipe updated successfully');
    } catch (error) {
        console.error('Error updating recipe:', error);
        next(error);
    }
});

// Delete a recipe by ID
router.delete('/:id', async (req, res, next) => {
    try {
        const recipe = await Recipe.findByIdAndDelete(req.params.id);
        if (!recipe) {
            return res.status(404).send('Recipe not found');
        }
        res.status(200).send('Recipe deleted successfully');
    } catch (error) {
        console.error('Error deleting recipe:', error);
        next(error);
    }
});

module.exports = router;
