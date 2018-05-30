const Mongolass = require('mongolass');
const mongolass = new Mongolass();

mongolass.connect('mongodb://localhost:27017/');
const User = mongolass.model('User', {
  username: {type: 'string', required: true },
  password: {type: 'string', required: true }
});

module.exports = User