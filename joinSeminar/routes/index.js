var express = require('express');
var router = express.Router();

router.use('/goldClass', require('./goldClass/goldClass'));
router.use('/bestSelling', require('./bestSelling'));
router.use('/forU', require('./forU'));
router.use('/mdRecom', require('./mdRecom'));

module.exports = router;
