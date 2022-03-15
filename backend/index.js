const bodyParser = require('body-parser');
const path = require('path');

const logger = require('morgan');

const express = require('express')
const app = express()
const port = 3000

const asiakasrouter = require('./routes/asiakas');

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/asiakas',asiakasrouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;