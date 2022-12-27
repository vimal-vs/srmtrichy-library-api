var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'SRMIST | Library' });
});

/* GET e-resources page. */
router.get('/e-resources', function(req, res, next) {
  res.render('e-resources', { title: 'Library | E-resources' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Library | About' });
});
/* GET Remote Access page. */
router.get('/Remote Access', function(req, res, next) {
  res.redirect('');
});
/* GET ask-a-librarian page. */
router.get('/ask-a-librarian', function(req, res, next) {
  res.render('ask-a-librarian', { title: 'Library | Ask a librarian' });
});
/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Library | Contact' });
});

module.exports = router;
