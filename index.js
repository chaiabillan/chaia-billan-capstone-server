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
const emergencyNumberRoutes = require('./routes/emergency-number-routes');
const emailRoutes = require('./routes/email-routes');

// all comments routes
app.use('/api/comments', commentsRoutes);
app.use('/api/replies', repliesRoutes);
app.use('/api/emergency-number', emergencyNumberRoutes);
app.use('/api/emails', emailRoutes);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});