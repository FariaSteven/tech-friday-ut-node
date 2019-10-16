var repository = require('./repository');
var express = require('express');
var router = express.Router();

const getAllCustomers = (_, res) =>
  repository.getAllCustomers()
    .then(x => res.json(x));

router.get('/', getAllCustomers);

module.exports = router;
