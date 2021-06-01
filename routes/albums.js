//import express
const { render } = require('ejs');
const express = require('express');
//invoke the express router
const router = express.Router();
//pull in data from our data.json
let pageAlbums = require('../data/data.json');
let albums = pageAlbums.albums;




router.get('/albums',(req,res)=>{
    res.render('albums',{
        pageAlbums:albums,
        albumDetails:null,
        pageTitle:"Albums",
    })
    
})

router.get('/albums/:index',(req,res)=>{
    let index = req.params.index;
    
    res.render('albums',{
        pageAlbums:albums,
        albumDetails:albums[index],
        pageTitle:`Albums - ${albums[index].name} `
        

    })

})



module.exports = router;