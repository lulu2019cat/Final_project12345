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
  '<a href="/user/Bob/about"> about </a>'
});

// define the about route
router.get('/about', function(req, res) {
  res.send(
  '<h1> About Bob </h1>'+
    '\n <img src="https://img.itinari.com/pages/images/original/428bec10-f8b4-4baa-84f3-092f557a1ed8-nicecover.jpg?ch=DPR&dpr=1.25&w=1600&s=e80263aceaf2fc2111b5daa801f761fd" height="60%">'
  );
});

module.exports = router;
