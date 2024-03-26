const express = require('express');
const cors = require('cors');
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 5050;

app.use(express.json());
app.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

const commentsRoutes = require('./routes/comments-routes');
const repliesRoutes = require('./routes/replies-routes');

// all comments routes
app.use('/api/comments', commentsRoutes);
app.use('/api/replies', repliesRoutes);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});