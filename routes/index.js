var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/manchkin', function(req, res, next) {
  res.send("<h1>Манчкин</h1>")
  });

router.get('/mainkun', function(req, res, next) {
    res.send("<h1>Мейнкун</h1>")
    });

router.get('/ragdoll', function(req, res, next) {
    res.send("<h1>Рэгдолл</h1>")
    });
  
router.get('/sfinks', function(req, res, next) {
    res.send("<h1>Сфинкс</h1>")
    });

router.get('/siamskaya', function(req, res, next) {
    res.send("<h1>Сиамская</h1>")
    });

router.get('/vislouhaya', function(req, res, next) {
    res.send("<h1>Шотландская вислоухая</h1>")
    });    
module.exports = router;
