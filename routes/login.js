var express = require('express');
var router = express.Router();
const User = require('../models/index');

router.get('/', (req, res) => {
  res.render('login', {title: '登录'})
})
router.post('/', (req, res) => {
  console.log(req.body)
  User.find().then(arr => {
    console.log('登录', arr)

    if(arr.findIndex(x => x.username === req.body.username) === -1){
      res.send({
        status: 0,
        message: '登录失败！',
        error: '用户名不存在！'
      })
      return;
    }
    if(req.body.password === arr.find(x => x.username === req.body.username).password){
      res.send({
        status: 0,
        message: '登录成功！',
        data: arr.find(x => x.username === req.body.username)
      })
    }else{
      res.send({
        status: 0,
        message: '登录失败！',
        error: '密码错误！'
      })
    }
  })
})

module.exports = router