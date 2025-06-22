const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

router.post('/', async (req, res) => {
  await Question.deleteMany();
  const questions = await Question.insertMany(req.body.questions);
  res.json(questions);
});

router.get('/random', async (req, res) => {
  const all = await Question.find();
  const random = all.sort(() => 0.5 - Math.random()).slice(0, 5);
  res.json(random);
});

module.exports = router;
