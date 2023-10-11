const mongoose = require('mongoose');
const News = require('./models/news'); // Import your News model

// Connect to your MongoDB database (replace 'your_database_name' with your actual database name)
mongoose.connect('mongodb://localhost/your_database_name', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Define sample news data
const sampleNewsData = [
  {
    title: 'Sample News 1',
    content: 'This is the content of sample news 1.',
  },
  {
    title: 'Sample News 2',
    content: 'This is the content of sample news 2.',
  },
  {
    title: 'Sample News 3',
    content: 'This is the content of sample news 3.',
  },
];

// Function to seed the database with sample news data
async function seedDatabase() {
  try {
    // Remove existing news data (optional, depending on your use case)
    await News.deleteMany({});

    // Insert the sample news data into the database
    await News.insertMany(sampleNewsData);

    console.log('Sample data has been added to the database.');
  } catch (error) {
    console.error('Error seeding the database:', error);
  } finally {
    // Close the database connection
    db.close();
  }
}

// Call the seedDatabase function to populate the database with sample data
seedDatabase();
