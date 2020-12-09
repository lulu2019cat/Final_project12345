var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route

router.get('/', function(req, res) {
  res.send('Bob\'s home page');
  '<a href="/user/Bob/about"> about </a>'+'<br>'
});

// define the about route
router.get('/about', function(req, res) {
  res.send(
  '<h1> About Bob </h1>'+
    '\n <img src="https://www.omgtw.com/upload/article/original/be134fac90625546754962aeef34925c.jpg" height="60%">'
  );
});

module.exports = router;
