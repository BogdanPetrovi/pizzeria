const express = require('express')
require('dotenv').config();
var morgan = require('morgan')
var cookieParser = require('cookie-parser');
var cors = require('cors');

const app = express();
const port = process.env.PORT;
app.use(cors({
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
  credentials: true
}));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json()); 

app.get('/get-cart', (req,res) => {
  const cart = req.cookies.cart;

  if(cart){
    res.json({cart: JSON.parse(cart)});
  } else {
    res.status(404).send({message: 'No cart'});
  }
})

app.post('/update-cart', (req,res) => {
  const cookie = req.body;

  res.cookie('cart', JSON.stringify(cookie), {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 7
  });

  res.send({message: "Success"})
})

app.listen(port, () => {
  console.log(`App is listening on port ${port}!`);
})