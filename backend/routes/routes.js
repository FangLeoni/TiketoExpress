const express = require('express')
const path = require('path')

const route = express.Router();

route.use('/',express.static(path.join(__dirname,'../','../','frontend')));

route.get('/', (req,res) => {
    
    res.sendFile(path.join(__dirname,'../','../','frontend','pages','Home','index.html'))
})

route.get('/Shop', (req,res) => {
    
    res.sendFile(path.join(__dirname,'../','../','frontend','pages','Shop','compra.html'))
})

route.get('/About', (req,res) => {

    res.sendFile(path.join(__dirname,'../','../','frontend','pages','About','index.html'))
})

route.get('/Places', (req,res) => {

    res.sendFile(path.join(__dirname,'../','../','frontend','pages','Places','places.html'))
})




route.get('/Locations/Deserto+de+sal/Bolivia', (req,res) => {

    res.sendFile(path.join(__dirname,'../','../','frontend','pages','Locations','pag2.html'))
})

route.get('/Locations/Svalbard/Artico', (req,res) => {

    res.sendFile(path.join(__dirname,'../','../','frontend','pages','Locations','pag3.html'))
})

route.get('/Locations/Lago+Manchado/British+Columbia', (req,res) => {

    res.sendFile(path.join(__dirname,'../','../','frontend','pages','Locations','pag4.html'))
})

route.get('/Locations/Parque+geologico+sangue+Zhangye/China', (req,res) => {

    res.sendFile(path.join(__dirname,'../','../','frontend','pages','Locations','pag5.html'))
})

route.get('/Locations/Fly+geyser/Nevada', (req,res) => {

    res.sendFile(path.join(__dirname,'../','../','frontend','pages','Locations','pag6.html'))
})

route.get('/Locations/Cofre+de+Sementes/Artico', (req,res) => {

    res.sendFile(path.join(__dirname,'../','../','frontend','pages','Locations','pag7.html'))
})

route.get('/Locations/Parque+Hitsujiyama/Japao', (req,res) => {

    res.sendFile(path.join(__dirname,'../','../','frontend','pages','Locations','pag8.html'))
})

route.get('/Locations/Vila+de+Shirakawago/Japao', (req,res) => {

    res.sendFile(path.join(__dirname,'../','../','frontend','pages','Locations','pag9.html'))
})

route.get('/Locations/Lago+hiller/Australia', (req,res) => {

    res.sendFile(path.join(__dirname,'../','../','frontend','pages','Locations','pag10.html'))
})





route.get('/Search', (req,res) => {

    res.sendFile(path.join(__dirname,'../','../','frontend','pages','Search','pesquisa.html'))
})

route.get('/Login', (req,res) => {

    res.sendFile(path.join(__dirname,'../','../','frontend','pages','Login','index.html'))
})

route.get('/Register', (req,res) => {

    res.sendFile(path.join(__dirname,'../','../','frontend','pages','Register','index.html'))
})


module.exports = route;