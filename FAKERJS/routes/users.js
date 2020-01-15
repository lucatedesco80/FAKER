var express = require('express');
var router = express.Router();

 router.get('/', (req,res) => {
    res.send('Ciao');
});

module.exports = router;
