//api endpoint

const express = require('express');
const router = express.Router();
const { getAllStock } = require('../controllers/StockController');
const { addStock } = require('../controllers/StockController');

router.get('/', getAllStock);
router.post('/addStock', addStock);

module.exports = router;