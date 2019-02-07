const express = require('express');
const router = express.Router({ mergeParams: true });

// const { adminRequired, authRequired } = require('../middleware/auth');

const String = require('../models/string');
// const { validate } = require('jsonschema');

// const { jobNewSchema, jobUpdateSchema } = require('../schemas');

router.get('/strings', async (req, res, next) => {
  try {
    const strings = await String.findAll();
    return res.json({ strings });
  } catch (err) {
    return next(err);
  }
});

router.post('/strings', async (req, res, next) => {
  try {
    const string = await String.add(req.body);
    return res.status(201).json({ string });
  } catch (err) {
    return next(err);
  }
});
