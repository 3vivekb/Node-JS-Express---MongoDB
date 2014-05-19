var express = require('express');
var router = express.Router();

/*
 * GET productlist.
 */
router.get('/productlist', function(req, res) {
    var db = req.db;
    db.collection('productcollection').find().toArray(function (err, items) {
        res.json(items);
    });
});

module.exports = router;
