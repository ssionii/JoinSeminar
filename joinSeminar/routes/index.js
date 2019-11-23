var express = require('express');
var router = express.Router();

router.use('/goldClass', require('./goldClass/goldClass'));

module.exports = router;
