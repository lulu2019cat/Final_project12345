var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route

router.get('/', function(req, res) {
  res.send('Alice\'s home page');
  '<a href="/user/Alice/about"> about </a>'+'<br>'
});

// define the about route
router.get('/about', function(req, res) {
  res.send(
    '<h1> About Alice </h1>'+
      '\n <img src="https://cdn.britannica.com/s:700x500/41/181941-050-DBEBA6D5/Old-Tower-canvas-oil-cardboard-Fields-Vincent-1884.jpg" height="60%">'
    );
});

module.exports = router;
