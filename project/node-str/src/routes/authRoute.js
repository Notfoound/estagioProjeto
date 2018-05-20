'use strict';

const express = require('express');
const router = express.Router();

const controller = require('../controllers/authController');

// Rotas (métodos "CRUD")
router.get('/', controller.get);
router.get('/:name', controller.getLogin);
router.post('/', controller.post);
router.delete('/:name', controller.remove);
router.put('/:name', controller.putPurchased);

module.exports = router;