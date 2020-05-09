const express = require('express');
const cors = require('cors');
const router = require('./routes');
const app = express();
const corsOption = {
    'Access-Control-Allow-Origin': '*'
};

app.use(router);
app.use(cors(corsOption));

app.listen(3333, () => console.log('Server running on port 3333'));

