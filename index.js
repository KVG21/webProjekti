const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const logger = require('morgan');

const express = require('express')
const app = express()
const port = 3000

const asiakasrouter = require('./routes/asiakas');
const ravintolarouter = require('./routes/ravintola');
const tuoterouter = require('./routes/tuote');
const historiarouter = require('./routes/historia');
const kirjautuminenrouter = require('./routes/kirjautuminen')


app.use(bodyParser.json());
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/asiakas',asiakasrouter);
app.use('/ravintola',ravintolarouter);
app.use('/tuote',tuoterouter);
app.use('/historia',historiarouter);
app.use('/kirjautuminen',kirjautuminenrouter);

app.use(express.static('build'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;