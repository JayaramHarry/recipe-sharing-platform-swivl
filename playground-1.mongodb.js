/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'playground-1';
const collection = 'recipes';

// Create a new database.
use(database);

// Create a new collection.
db.createCollection(collection);

// Insert sample data into the collection.
db[collection].insertMany([
  {
    title: 'Spaghetti Carbonara',
    description: 'Classic Italian pasta dish with bacon, eggs, and cheese.',
    ingredients: ['Spaghetti', 'Bacon', 'Eggs', 'Parmesan cheese', 'Black pepper'],
    instructions: ['Cook spaghetti according to package instructions.', 'Fry bacon until crispy.', 'Mix eggs and cheese in a bowl.', 'Combine cooked spaghetti, bacon, and egg mixture.', 'Season with black pepper and serve.']
  },
  {
    title: 'Chicken Tikka Masala',
    description: 'Creamy and flavorful Indian chicken dish with a tomato-based sauce.',
    ingredients: ['Chicken', 'Yogurt', 'Tomatoes', 'Onion', 'Garlic', 'Ginger', 'Spices'],
    instructions: ['Marinate chicken in yogurt and spices.', 'Grill or cook chicken until cooked through.', 'Prepare tomato-based sauce with onions, garlic, and ginger.', 'Add cooked chicken to the sauce and simmer.', 'Serve with rice or naan.']
  }
]);

// The prototype form to create a collection:
/* db.createCollection( <name>,
  {
    capped: <boolean>,
    autoIndexId: <boolean>,
    size: <number>,
    max: <number>,
    storageEngine: <document>,
    validator: <document>,
    validationLevel: <string>,
    validationAction: <string>,
    indexOptionDefaults: <document>,
    viewOn: <string>,
    pipeline: <pipeline>,
    collation: <document>,
    writeConcern: <document>,
    timeseries: { // Added in MongoDB 5.0
      timeField: <string>, // required for time series collections
      metaField: <string>,
      granularity: <string>,
      bucketMaxSpanSeconds: <number>, // Added in MongoDB 6.3
      bucketRoundingSeconds: <number>, // Added in MongoDB 6.3
    },
    expireAfterSeconds: <number>,
    clusteredIndex: <document>, // Added in MongoDB 5.3
  }
)*/

// More information on the `createCollection` command can be found at:
// https://www.mongodb.com/docs/manual/reference/method/db.createCollection/
