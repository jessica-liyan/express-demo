const express = require('express');
const router = express.Router();
const User = require('../models/index');

router.get('/', (req, res) => {
  res.render('res', {title: '注册'})
})
router.post('/', (req, res) => {
  console.log(req.body)
  User.find().then(arr => {
    console.log(arr)
    
    if(arr.findIndex(x => x.username === req.body.username) !== -1){
      res.send({
        status: 0,
        message: '注册失败！',
        error: '用户名已经存在！'
      })
      return;
    }
    if(!/^[a-zA-Z0-9-_]{3,10}$/.test(req.body.username)){
      res.send({
        status: 0,
        message: '注册失败！',
        error: '用户名是大小英文字母，或数字，或下划线和减号，长度是3到10！'
      })
      return;
    }
    if(!/^[a-zA-Z0-9-_]{3,10}$/.test(req.body.password)){
      res.send({
        status: 0,
        message: '注册失败！',
        error: '密码是大小英文字母，或数字，或下划线和减号，长度是3到10！'
      })
      return;
    }
    User
      .insertOne({
        username: req.body.username,
        password: req.body.password
      })
      .exec()
      .then(() => {
        return User.find()
      })
      .then(data => {
        res.send({
          status: 1,
          message: '注册成功！',
          data: data
        });
      })
      .catch(err => res.send({
        status: 0,
        message: '注册失败！',
        error: err
      }))
  })
  
})

module.exports = router