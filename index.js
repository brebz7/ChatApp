const express = require('express');
const app = express();
const server = app.listen(4000, () => console.log('ChatApp is listening on port 4000'));

app.use(express.static('public'));