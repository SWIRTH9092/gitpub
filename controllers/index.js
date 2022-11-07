const express = require('express');      //get the express package
let drinks = require('../models/drinks'); //<--get our drinks array
const food = require('../models/food');     //<==get our foods array
const router = express.Router(); //<-- we CANOT do const app = express() because 
//we did that in server.js. Therefore we must do const router = express.Router()
//and replace all the app.get to router.get

//route 1
router.get('/', (request,response) => {
    response.send(`
    <head>
        <link href="/css/styles.css" rel="stylesheet">
    </head>
    <body>
    <h1 style="margin-top: 100px;">
         Welcome to the gitpub App!
    </h1>
    <a href="./drinks">Drink and Food Menu</a>
    <p></p>
    <img class="mainimg" src="https://media.blogto.com/articles/20150123-whelansgate2048-10.jpg?cmd=resize_then_crop&quality=70&w=2048&height=1365">
    </body>
    `)
})
 


router.get('/drinks', (request,response) => {
   let drinksFood = []
   drinks.forEach((element,index) => {
    drinksFood.push({name: element.name, price: element.price, image: element.image, type: "drinks", arrIdx: index})
   })
   food.forEach((element,index) => {
    drinksFood.push({name: element.name, price: element.price, image: element.image, type: "food", arrIdx: index})
   })
   response.render('drinks_index.ejs', { drinksFood } )

})

router.get('/drinks/:id', (request,response) => {
    let oneDrink = drinks [request.params.id]
    response.render('drinks_show.ejs', { oneDrink } )   
})
  
router.get('/food/:id', (request,response) => {
    let oneFood = food [request.params.id]
    response.render('food_show.ejs', { oneFood } )   
})
module.exports = router; //<---- making this router exportable