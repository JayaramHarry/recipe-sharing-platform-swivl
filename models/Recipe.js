
const mongoose = require('mongoose');

// Define schema for the Recipe model
const recipeSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ingredients: {
        type: [String],
        required: true
    },
    instructions: {
        type: String,
        required: true
    },
    imageUrl: String
});

// Create Recipe model from schema
const RecipeModel = mongoose.model('Recipe', recipeSchema);

class Recipe {
    constructor(title, description, ingredients, instructions, imageUrl = null) {
        this.title = title;
        this.description = description;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.imageUrl = imageUrl;
    }

    // Method to save recipe to the database
    async save() {
        try {
            // Create a new document based on the Recipe model
            const newRecipe = new RecipeModel({
                title: this.title,
                description: this.description,
                ingredients: this.ingredients,
                instructions: this.instructions,
                imageUrl: this.imageUrl
            });

            // Save the new recipe document to the database
            const savedRecipe = await newRecipe.save();

            console.log('Recipe saved successfully:', savedRecipe);
            return savedRecipe;
        } catch (error) {
            console.error('Error saving recipe:', error);
            throw error;
        }
    }

    // Method to find recipe by title
    static async findByTitle(title) {
        try {
            const recipe = await RecipeModel.findOne({ title });
            return recipe;
        } catch (error) {
            console.error('Error finding recipe by title:', error);
            throw error;
        }
    }

    // Method to update recipe by title
    static async updateByTitle(title, update) {
        try {
            const updatedRecipe = await RecipeModel.findOneAndUpdate({ title }, update, { new: true });
            return updatedRecipe;
        } catch (error) {
            console.error('Error updating recipe by title:', error);
            throw error;
        }
    }

    // Method to delete recipe by title
    static async deleteByTitle(title) {
        try {
            const deletedRecipe = await RecipeModel.findOneAndDelete({ title });
            return deletedRecipe;
        } catch (error) {
            console.error('Error deleting recipe by title:', error);
            throw error;
        }
    }
}

module.exports = Recipe;
