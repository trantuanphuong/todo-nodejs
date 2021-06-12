var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('home', { todoNumber = "5"});
  res.render('home', { todoNumber: "5" });
});

module.exports = router;
