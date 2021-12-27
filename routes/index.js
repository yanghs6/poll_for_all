var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express by HaeSeong Yang(2015250032)' });
});

module.exports = router;
