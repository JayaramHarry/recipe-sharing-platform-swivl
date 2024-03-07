const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/User'); // Import the User model
const Recipe = require('./models/Recipe'); // Import the Recipe model

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/playground-1', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    })
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Routes
// User registration route
app.post('/register', async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        const user = new User({ name: username, email, password }); // Assuming your User model expects 'name' instead of 'username'
        await user.save(); // Use the save method to save the user to the database
        res.status(201).send('User registered successfully');
    } catch (error) {
        console.error('Error registering user:', error);
        next(error); // Pass error to error handling middleware
    }
});

// Recipe creation route
app.post('/recipes', async (req, res, next) => {
    try {
        const { title, description, ingredients, instructions, imageUrl } = req.body;
        const recipe = new Recipe({ title, description, ingredients, instructions, imageUrl });
        await recipe.save(); // Use the save method to save the recipe to the database
        res.status(201).send('Recipe saved successfully');
    } catch (error) {
        console.error('Error saving recipe:', error);
        next(error); // Pass error to error handling middleware
    }
});
app.get('/users', async (req, res) => {
    try {
        const users = await User.find(); // Fetch all users from the database
        res.status(200).json(users); // Send the users as a JSON response
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});
