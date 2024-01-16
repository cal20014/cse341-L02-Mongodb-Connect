// Import the dotenv module to load environment variables
const dotenv = require("dotenv");
// Load environment variables from .env file
dotenv.config();

// Import the MongoClient object from the mongodb module
const MongoClient = require("mongodb").MongoClient;

// Declare a variable to hold the database connection
let _db;

// Define a function to initialize the database connection
const initDb = (callback) => {
  // If the database is already initialized
  if (_db) {
    // Log a message to the console
    console.log("Database is already initialized!");
    // Return the database connection via the callback function
    return callback(null, _db);
  }
  // Connect to the MongoDB server using the connection string from the environment variables
  MongoClient.connect(process.env.MONGODB_URI)
    .then((client) => {
      // If the connection is successful, store the client in _db
      _db = client;
      // Return the database connection via the callback function
      callback(null, _db);
    })
    .catch((err) => {
      // If there is an error, pass the error to the callback function
      callback(err);
    });
};

// Function to get the database connection
const getDb = () => {
  // If the database (_db) is not initialized
  if (!_db) {
    // Throw an error
    throw Error("Database is not initialized");
  }
  // If the database is initialized, return the database connection
  return _db;
};

// Export the initDb and getDb functions
module.exports = { initDb, getDb };
