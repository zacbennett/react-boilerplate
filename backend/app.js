/** Express app for jobly. */

const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json());

const String = require('./models/string');


// Get all the strings to the database
app.get('/strings', async function(req, res, next) {
  try {
    const strings = await String.findAll();
    return res.json({ strings });
  } catch (err) {
    return next(err);
  }
});

// Add a string to the database
app.post('/strings', async function(req, res, next) {
  try {
    const string = await String.add(req.body.data);
    return res.status(201).json({ string });
  } catch (err) {
    return next(err);
  }
})

// 404 handler
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;

  // pass the error to the next piece of middleware
  return next(err);
});

// General error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500);

  return res.json({
    error: err,
    message: err.message
  });
});

module.exports = app;
