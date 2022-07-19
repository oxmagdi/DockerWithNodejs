var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    users:[
      {id:1, username:'a', email:'a@gmail.com'},
      {id:2, username:'b', email:'b@gmail.com'},
      {id:3, username:'c', email:'c@gmail.com'},
      {id:4, username:'d', email:'d@gmail.com'},
    ]
  })
});

module.exports = router;
