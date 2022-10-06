const express = require('express');
const jsonServer = require('json-server');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 9000;
const publicPath = path.join(__dirname, '..', 'public');

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(publicPath));

app.use('/api', jsonServer.router(path.join(__dirname, 'db.json')));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port);