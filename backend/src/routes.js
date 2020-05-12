const express = require('express');
const router = express.Router();
const getPdf = require('./Controllers/getPdf');
const getData = require('./Controllers/getData');
                                    
router.get('/', async (req, res) => {   
    try {
        await getPdf();
        await getData();
    } catch(e) {
        e => res.send(e)
    }
})

module.exports = router;