const express = require('express');
const router = express.Router();
const Response = require('../models/Response');

router.post('/', async (req, res) => {
  const responses = await Response.insertMany(req.body.answers);
  res.json(responses);
});

module.exports = router;
