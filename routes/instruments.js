var express = require('express');
const instrument_controller = require('../controllers/instrument');
var router = express.Router();

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('instruments', { title: 'Search Results' });
});
*/

/* GET costumes */
router.get('/', instrument_controller.instrument_view_all_Page );

module.exports = router;