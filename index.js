const express = require('express');
const cors = require('cors');
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 5050;

// app.use(express.json);
app.use(cors())

const commentsRoutes = require('./routes/comments-routes');

// all comments routes
app.use('/api/comments', commentsRoutes);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});