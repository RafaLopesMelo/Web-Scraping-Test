const express = require('express');
const request = require('request');
const cors = require('cors');
const open = require('open');

const app = express();
const router = express.Router();

const corsOption = {
    'Access-Control-Allow-Origin': '*'
}

app.use(router)
app.use(cors(corsOption))

router.get('/', (req, res) => {
    res.send('Hello')
})

app.listen(3333, () => console.log('Server running on port 3333'));

