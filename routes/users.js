var express = require('express');
var router = express.Router();

const {register, login} = require('../controllers/usersControllers')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;