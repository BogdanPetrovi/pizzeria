const express = require('express')
require('dotenv').config();
var morgan = require('morgan')

const app = express();
const port = process.env.PORT;
app.use(morgan('dev'));

app.listen(port, () => {
  console.log(`App is listening on port ${port}!`);
})