var express = require('express'); // GIA CREATO
var router = express.Router(); // GIA CREATO
const people_file = require ('../people.json') // CONTIENE TUTTO IL JSON

router.get('/', (req, res) => {
  res.render('index', { title: 'poeti',
  people: people_file.persone



  });
});

module.exports = router;
