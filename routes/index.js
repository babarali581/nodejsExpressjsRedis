const express = require('express');
const router = express.Router();
const db = require('../dbconfig');
const async = require('async');

/* GET home page. */
router.get('/', async function(req, res, next) {
  await db.set('radis-key', 'redis-value');
  const mydata = await db.get('radis-key');
  res.render('index', { title: mydata });
});

module.exports = router;
