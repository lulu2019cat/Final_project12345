let express = require('express');
let router = express.Router();
router.use(express.static('./public')); // 把 public 中的檔案全部丟上來
// middleware that is specific to this router

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route

router.get('/', function(req, res) {
  res.send(
    'Victoria\'s home page'+'<br>'+
    '<a href="/user/Victoria/about"> about </a>'+'<br>'+
    '<a href="/user/Victoria/classA.html"> classA </a>'
    );
});

// define the about route
router.get('/about', function(req, res) {
  res.send(
    '<h1> About Victoria </h1>'+
    '\n <img src="https://img.itinari.com/pages/images/original/c46b832d-deb5-4988-800c-ceb368d3883a-istock-490129602.jpg?ch=DPR&dpr=1.25&w=1600&s=c5e23ce3664efaf2a66425cdaf60d2d6" height="60%">'
    );
});

module.exports = router;
