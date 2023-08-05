const { getFilters } = require('../Handlers/filtersHandler');
const { Router } = require('express');

const router = Router();

router.get('/', getFilters);

module.exports = router;