require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.POR || 3000;

const drinkFoodController = require('./controllers/index');

app.use(drinkFoodController);

app.listen(PORT, () => {
    console.log("listening on port:" , PORT)
})

