var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  console.log('session', req.session)
  res.render('index', {title: '首页'})
})

module.exports = router