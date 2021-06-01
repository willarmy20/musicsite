const express = require('express');
//invoke the express router
const router = express.Router();
//pull in data from our data.json



router.get(`/landingpage`, (req, res)=>{
    res.render('albums')
})



module.exports = router;
