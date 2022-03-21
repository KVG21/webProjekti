const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const logger = require('morgan');

const express = require('express')
const app = express()
const port = 3001

const asiakasrouter = require('./routes/asiakas');
const ravintolarouter = require('./routes/ravintola');
const ravintoloitsijarouter = require('./routes/ravintoloitsija');
const tuoterouter = require('./routes/tuote');
const historiarouter = require('./routes/historia');
const kirjautuminenrouter = require('./routes/kirjautuminen')

app.use(bodyParser.json());
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/asiakas',asiakasrouter);
app.use('/ravintola',ravintolarouter);
app.use('/ravintoloitsija',ravintoloitsijarouter);
app.use('/tuote',tuoterouter);
app.use('/historia',historiarouter);
app.use('/kirjautuminen',kirjautuminenrouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;