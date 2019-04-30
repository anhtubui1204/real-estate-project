const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//load passport auth
const passport = require('passport');
const auth = passport.authenticate('jwt', {session: false});

//Load Model
const Project = require('../../models/Project');
const Ads = require('../../models/Ads');


//@ route GET api/ads/test
//Test ads route
//@ access public
router.get('/test',(req, res)=> {
    res.json({
        msg: "ads works"
    })
});


//@ route POST api/ads
//Post new ADS
//@ access private


//@route GET api/ads
//GET current user ads
//@access private

//@route GET api/ads/all
//GET all ads
//access public

//@route GET api/ads/:id
//GET ads by id
//Access public

//@route GET api/ads/project/:id
//GET ads by project id
//Access public

//@route DELETE api/ads/:id
//DELETE ads
//access private

//@route PUT api/ads/:id
//Update ads
//access private


module.exports = router;

