var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Drink Menu 2', data: [
            {name: 'Bloody Mary', drunkness: 3},
            {name: 'Martini', drunkness: 5},
            {name: 'Scotch', drunkness: 10}
        ]
    });
});

module.exports = router;
