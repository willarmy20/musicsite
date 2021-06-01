//bring in express/ set up express router/ node fs module
const express = require('express');
const router = express.Router();
const fs = require('fs');
//import data file
let feedbackData = require('../data/feedback.json');

//set up middleware to convert header strings to js object
router.use(express.json());
router.use(express.urlencoded({extended:true}));


//render feedback.ejs
router.get('/feedback',(req,res) => {
    res.render('feedback',{
        pageTitle:"Comments"
    });
})

router.post('/api',(req,res) => {
    //takes data from the request header and since it is already formatted correctly appends it to the front of feedback data which is an object at the moment
    feedbackData.unshift(req.body);
    //writes all the data including the new data to the json file
    fs.writeFile('data/feedback.json',JSON.stringify(feedbackData),'utf8',(err)=>{
        if(err){
            console.log(err);
        }
    })
    //returns the updated object to the front end
    res.json(feedbackData);
    
    
})
// so front end can display all the info in the json file
router.get('/api',(req,res) => {
    res.json(feedbackData)
})

module.exports = router




