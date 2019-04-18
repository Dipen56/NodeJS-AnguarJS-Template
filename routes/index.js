var express = require('express');
var router = express.Router();

var controller = require('../controllers/index.controller');

router.get('/', controller.index);
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


module.exports = router;
