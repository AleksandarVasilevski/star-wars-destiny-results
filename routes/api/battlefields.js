var express = require('express');
var router = express.Router();
const Battlefield = require('../../models/Battlefield');

/* POST battlefield */
router.post('/', (req, res, next) => {
  Battlefield.create({ name: req.body.name}).then(battlefield => {
    res.redirect('/battlefields');
  }).catch(err => console.log(err));
});

/* DELETE battlefield */
router.delete('/', (req, res, next) => {
  Battlefield.destroy({ where: {id: req.body.id}}).then(battlefield => {
    res.redirect('/battlefields');
  }).catch(err => console.log(err));
});


module.exports = router;