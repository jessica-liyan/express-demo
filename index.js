const express = require('express')
const path = require('path')
const app = express()
const Joi = require('joi')
const bodyParser = require('body-parser');

app.use(express.json())
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// 添加会话支持
// var session = require('express-session');
// var MongoStore = require('connect-mongo')(session);

// app.use(session({
//   secret: 'myDb',
//   cookie: ('name', 'value', { path: '/', httpOnly: true,secure: false, maxAge:  60000 }),
//   resave: true,
//   saveUninitialized: true,
//   store: new MongoStore({// 将 session 存储到 mongodb
//     url: 'mongodb://localhost:27017/myDb'
//   })
// }))

// 设置views所在根目录和views模板引擎
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

// 设置静态资源所在根目录
app.use(express.static(path.resolve(__dirname, 'src')))

// 使用路由模板
app.use('/', require('./routes/index'))
app.use('/login', require('./routes/login'))
app.use('/res', require('./routes/res'))

// // 连接mongodb服务
// const MongoClient = require('mongodb').MongoClient
// const assert = require('assert')

// const url = 'mongodb://localhost:27017'

// const dbName = 'myDb';

// MongoClient.connect(url, function(err, client) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");

//   const db = client.db(dbName);
//   app.users = db.collection('users')
// });

// 404错误处理
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err);
});

app.use(function(err, req, res, next){
  res.status(err.status || 500)
  res.render('error')
})

// 设置端口号
app.set('port', process.env.PORT || 3000)
app.listen(app.get('port'), () => {
  console.log(`listening on http://localhost:${app.get('port')}`)
})

