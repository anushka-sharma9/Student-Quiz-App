const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/quizapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const questionRoutes = require('./routes/quizRoutes');
const responseRoutes = require('./routes/responseRoutes');

app.use('/quiz', questionRoutes);
app.use('/response', responseRoutes);

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
