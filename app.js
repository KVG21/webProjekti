const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const logger = require('morgan');
const express = require('express')
const publicPath = path.join(__dirname, 'build')

console.log("hello aatu"+publicPath)

const PORT = process.env.PORT || 80;
const app = express()
app.set("port", PORT);


const asiakasrouter = require('./routes/asiakas');
const ravintolarouter = require('./routes/ravintola');
const tuoterouter = require('./routes/tuote');
const historiarouter = require('./routes/historia');
const kirjautuminenrouter = require('./routes/kirjautuminen')


app.listen(PORT,() => {
  console.log(`App listening on port ${PORT}`);
});

app.use(bodyParser.json());
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(publicPath))

app.get('/', (req,res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
})

app.use('/asiakas',asiakasrouter);
app.use('/ravintola',ravintolarouter);
app.use('/tuote',tuoterouter);
app.use('/historia',historiarouter);
app.use('/kirjautuminen',kirjautuminenrouter);




module.exports = app;