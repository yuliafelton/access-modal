const express = require('express');
const bodyParser = require('body-parser');
const emailsRoutes = require('./routes/emailsList.js');
const cors = require('cors');

const app = express();
const PORT = 7000;

app.use(cors());

app.use(bodyParser.json());

app.use('/emails', emailsRoutes);


app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))