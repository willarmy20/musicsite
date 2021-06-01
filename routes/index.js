//import express
const express = require('express');
//invoke the express router
const router = express.Router();

//import from our data.json
let dataFile = require('../data/data.json');

let pageAlbums = dataFile.albums;
router.get(`/`, (req, res)=>{
    res.render('landingpage',{
        pageTitle: 'Home',
        pageAlbums

    })
})

router.get('/index', (req,res)=>{
    res.render('index',{
       pageTitle: 'Home',
       pageAlbums
    })
})

//export out to main application
module.exports = router;