const express = require('express');
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 5050;

const commentsRoutes = require('./routes/comments-routes');

// all users routes
app.use('/comments', commentsRoutes);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});