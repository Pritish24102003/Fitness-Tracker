const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/smarthealth', { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => res.send('Hello from Smart Health Assistant Backend'));

// Define more routes for each feature

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
