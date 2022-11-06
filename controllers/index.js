const express = require('express');      //get the express package
const drinks = require('../models/drinks'); //<--get our drinks array
// const food = require('../models/food');     //<==get our foods array
const router = express.Router(); //<-- we CANOT do const app = express() because 
//we did that in server.js. Therefore we must do const router = express.Router()
//and replace all the app.get to router.get

//route 1
router.get('/', (request,response) => {
    response.send("Welcome to the gitpub App!")
})

router.get('/drinks', (request,response) => {
   response.render('drinks_index.ejs', { drinks })
})

router.get('/drinks/:id', (request,response) => {
    let oneDrink = drinks [request.params.id]
    response.render('drinks_show.ejs', { oneDrink } )   
})

router.get("/fruits/:indexOfFruitsArray", (req, res) => {

    res.send(fruits[req.params.indexOfFruitsArray]);
 });

module.exports = router; //<---- making this router exportable


