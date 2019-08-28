var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ name: 'Developer', skills: ['Java', 'Angular'] });
});
router.post('/add', function(req, res, next) {
    var body = req.body.user;
    console.log(body);
    res.send('success');
})



module.exports = router;
