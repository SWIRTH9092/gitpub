require("dotenv").config();
const { response } = require("express");
const express = require('express');
const app = express();
const PORT = process.env.POR || 3000;

app.get('/', (request,response) => {
    response.send("Welcome to the gitpub App!")
})

app.listen(PORT, () => {
    console.log("listening on port:" , PORT)
})