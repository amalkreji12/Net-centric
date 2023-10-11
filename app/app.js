const express = require('express');
const mongoose = require('mongoose');
const app = express();
//require('./db')

// Middleware
app.use(express.json());
app.use(express.static('static'));

// Connect to MongoDB (you need to have MongoDB running locally or specify your DB connection)
mongoose.connect(process.env.MONOGOURL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define routes
const authRouter = require('./routes/auth');

const newsRouter = require('./routes/news');

app.use('/api/auth', authRouter);
app.use((req, res,next) => {
  if (req.session.userId) {
   next()
  } else {
    res.json({ isAuthenticated: false });
  }
});
app.use('/api/news', newsRouter);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
