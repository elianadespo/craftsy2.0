var express = require('express');
var router = express.Router();

const {index, admin} = require ('../controllers/indexControllers')

/* GET home page. */
router.get('/index', admin)

module.exports = router;
