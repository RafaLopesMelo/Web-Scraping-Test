const express = require('express');
const router = express.Router();
const getPdf = require('./Controllers/getPdf');
const getData = require('./Controllers/getData');
                                    
router.get('/', async (req, res) => {    
    await getPdf().catch(err => res.send(err))
    await getData().catch(err => res.send(err))
})

module.exports = router;