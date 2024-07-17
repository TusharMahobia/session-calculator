var express = require('express');
var router = express.Router();

router.post("/input", function (req, res) {

  value = req.body.first;
  valuee = req.body.second;

  req.session.firstvalue = value;
  req.session.secondvalue = valuee;

  console.log(value);
  console.log(valuee);

  res.send('{"data":"Value You Typed In Frontend : -  ' + req.session.firstvalue + ' and ' + req.session.secondvalue + '"}');

});

router.get('/add', function (req, res, next) {

  var value = req.session.firstvalue;
  var valuee = req.session.secondvalue;

  var result = parseInt(value) + parseInt(valuee);

  res.send('{"data":"The Addition is---- ' + result + '"}');

});

router.get('/sub', function (req, res, next) {

  var value = req.session.firstvalue;
  var valuee = req.session.secondvalue;

  var result = parseInt(value) - parseInt(valuee);

  res.send('{"data":"The Subtraction is---- ' + result + '"}');

});

router.get('/multi', function (req, res, next) {

  var value = req.session.firstvalue;
  var valuee = req.session.secondvalue;

  var result = parseInt(value) * parseInt(valuee);

  res.send('{"data":"The Multiplication is---- ' + result + '"}');

});

router.get('/div', function (req, res, next) {

  var value = req.session.firstvalue;
  var valuee = req.session.secondvalue;

  var result = parseInt(value) / parseInt(valuee);

  res.send('{"data":"The Division is---- ' + result + '"}');

});

module.exports = router;
