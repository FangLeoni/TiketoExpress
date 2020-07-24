const express = require('express')
const path = require('path')

const route = express.Router();

route.use('/',express.static(path.join(__dirname,'../','../','frontend')));

route.get('/', (req,res) => {
    
    res.sendFile(path.join(__dirname,'../','../','frontend','pages','Home','index.html'))
})

route.get('/About', (req,res) => {

    res.sendFile(path.join(__dirname,'../','../','frontend','pages','About','index.html'))
})

route.get('/Locations', (req,res) => {

    res.sendFile(path.join(__dirname,'../','../','frontend','pages','Locations','index.html'))
})

route.get('/Login', (req,res) => {

    res.sendFile(path.join(__dirname,'../','../','frontend','pages','Login','index.html'))
})

route.get('/Register', (req,res) => {

    res.sendFile(path.join(__dirname,'../','../','frontend','pages','Register','index.html'))
})


module.exports = route;