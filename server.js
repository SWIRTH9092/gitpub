require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.POR || 3000;

app.use(express.static(__dirname + '/public'))
// app.use(express.static(__dirname + '/public')); // this is how we add css to 
// our templates in html.

const drinkFoodController = require('./controllers/index');

app.use(drinkFoodController);

app.listen(PORT, () => {
    console.log("listening on port:" , PORT)
})

