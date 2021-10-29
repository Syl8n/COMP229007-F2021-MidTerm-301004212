/*
 app.js
 Henry Suh
 301004212
 Mid-Term Test
*/

var express = require('express');
var router = express.Router();
let controlerIndex = require('../controllers/index');

/* GET home page. */
router.get('/', controlerIndex.home);

module.exports = router;
