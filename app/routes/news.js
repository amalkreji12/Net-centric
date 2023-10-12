const express = require('express');
const router = express.Router();
const News = require('../models/news');

// Fetch all news articles

// Fetch all news articles
router.get('/', async (req, res) => {
  try {
    const news = await News.find();
    res.json({sucess:true,news : news});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/search/:query', async (req, res) => {
  const searchQuery = req.params.query;

  try {
    const results = await News.find({ tags: { $in: searchQuery.split(',') } });

    res.json(results);
  } catch (error) {
    console.error('Error searching news:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Fetch a specific news article by ID
router.get('/:id', async (req, res) => {
  try {
    const newsId = req.params.id;
    const newsArticle = await News.findById(newsId);

    if (!newsArticle) {
      return res.status(404).json({ message: 'News article not found' });
    }

    return res.json({sucess : true, news :newsArticle });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new news article
router.post('/', async (req, res) => {
  try {
    const { title, content, tags } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: 'Title and content are required' });
    }

    const newNewsArticle = new News({
      title,
      content,
      tags,
      date : Date()
    });

    const savedNewsArticle = await newNewsArticle.save();

    res.status(201).json(savedNewsArticle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;
