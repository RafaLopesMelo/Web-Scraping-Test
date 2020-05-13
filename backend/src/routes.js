const express = require('express');
const router = express.Router();
const getPdf = require('./Controllers/getPdf');
const getData = require('./Controllers/getData');
                                    
router.get('/', async (req, res) => {   
    await getPdf();
    await getData(req, res);
})

module.exports = router;