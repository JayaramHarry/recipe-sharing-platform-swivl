// Recipe Routes (routes/recipeRoutes.js)
const express = require('express');
const Recipe = require('../models/Recipe');

const router = express.Router();

// Create a recipe
router.post('/', async (req, res, next) => {
  try {
    const { title, description, ingredients, instructions, imageUrl } = req.body;
    const recipe = new Recipe({ title, description, ingredients, instructions, imageUrl });
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

// Other recipe routes (GET by ID, PUT, DELETE) can be added similarly

module.exports = router;
