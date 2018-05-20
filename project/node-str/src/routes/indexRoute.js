'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>{
    res.status(200).send({
        title: "Node API Estágio",
        author: "Matheus Silvério",
        version: "1.0"
    });
});
router.get('/views', (req, res, next) =>{
    res.render('../scripts/vue-index');
});
module.exports = router;