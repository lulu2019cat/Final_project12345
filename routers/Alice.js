var express = require('express');
var router = express.Router();
router.use(express.static('./public'));

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route

router.get('/', function(req, res) {
  res.send(
  'Alice\'s home page'+'<br>'+
  '<a href="/user/Alice/about"> about </a>'
  );
});

// define the about route
router.get('/about', function(req, res) {
  res.send(
    '<h1> About Alice </h1>'+
      '\n <img src="https://img.itinari.com/page/content/original/c9ed4332-db5b-4b5d-9fe2-9bcc852910c5-saleya.jpg?ch=DPR&dpr=1.25&w=994&s=7878b7832de9ee403cdd10007cd6a3f0" height="60%">'
    );
});

module.exports = router;
