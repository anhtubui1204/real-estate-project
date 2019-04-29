const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');


//Load Model
const Profile = require('../../models/Profile');
const User = require('../../models/User');

//Load validator
const validateProfileInput = require('../../validation/profile');

//@ route GET api/profile/test
//Test profile route
//@ access public
router.get('/test',(req, res)=> {
    res.json({
        msg: "profile works"
    })
});

//@ route GET api/profile/
//Get current user profile
//@ access private
router.get('/', passport.authenticate('jwt', {session: false}), (req, res)=> {
    const errors = {};
    
    Profile.findOne({user: req.user.id})
        .populate('user', ['name', 'avatar']) 
        .then(profile=> {
            if(!profile){
                errors.noprofile= 'There is no profile for this user';
                return res.status(404).json(errors)
            }
            res.json(profile)
        })
        .catch(err => res.status(404).json(err));
});


//@ route GET api/profile/all
//Get all user profiles
//@ access public
router.get('/all', (req,res)=> {
    const errors = {}

    Profile.find()
        .populate('user', ['name', 'avatar'])
        .then(profiles=>{
            if(!profiles){
                errors.noprofile='There us no profile'
                res.status(404).json(errors);
            }
            res.json(profiles);
        })
        .catch(err=> res.status(404).json({noprofile: 'There is no profile'}))
})


//@ route GET api/profile/handle/:handle
//Get user profile by handle
//@ access private
router.get('/handle/:handle', (req, res)=> {
    const errors = {}

    Profile.findOne({handle: req.params.handle})
        .populate('user', ['name', 'avatar'])
        .then(profile=> {
            if(!profile){
                errors.noprofile='There is no profile for this user';
                res.status(404).json(errors)
            }else{
                res.json(profile);
            }
            
        })
        .catch(err=> res.status(404).json(err))
})

//@ route GET api/profile/user/:user_id
//Get user profile by user_id
//@ access private
router.get('/user/:user_id', (req, res)=> {
    const errors = {}

    Profile.findOne({user: req.params.user_id})
        .populate('user', ['name', 'avatar'])
        .then(profile=> {
            if(!profile){
                errors.noprofile='There is no profile for this user';
                res.status(404).json(errors)
            }
            res.json(profile);
        })
        .catch(err=> res.status(404).json({noprofile: 'There is no profile for this user id'}))
})

//@ route Post api/profile/
//Create user profile
//@ access private
router.post('/', passport.authenticate('jwt', {session: false}), (req, res)=> {
    const {errors, isValid} = validateProfileInput(req.body);

    //Check Validation
    if(!isValid){
        return res.status(400).json(errors);
    }
    
    //Get fields
    const profileFields = {};
    profileFields.user = req.user.id;

    if(req.body.handle) profileFields.handle = req.body.handle;
    if(req.body.company) profileFields.company = req.body.company;
    if(req.body.website) profileFields.website = req.body.website;
    if(req.body.location) profileFields.location = req.body.location;
    if(req.body.status) profileFields.status = req.body.status;
    if(req.body.bio) profileFields.bio = req.body.bio;

    //Social
    profileFields.social={};
    if(req.body.youtube) profileFields.social.youtube = req.body.youtube;
    if(req.body.twitter) profileFields.social.twitter = req.body.twitter;
    if(req.body.facebook) profileFields.social.facebook = req.body.facebook;
    if(req.body.linkedIn) profileFields.social.linkedIn = req.body.linkedIn;
    if(req.body.instagram) profileFields.social.instagram = req.body.instagram;

    Profile.findOne({user: req.user.id})
         //display the user model
        .then(profile=> {
            if(profile){
                //Update
                Profile.findOneAndUpdate({user: req.user.id}, {$set: profileFields}, {new: true})
                    .then(profile=> res.json(profile))
            } else {
                //Create profile
                //Check if handle exists
                Profile.findOne({handle: profileFields.handle})
                    .then(profile=> {
                        if(profile){
                            errors.handle = 'That handle already exists';
                            res.status(400).json(errors);
                        }

                        //save profile
                        new Profile(profileFields).save().then(profile=> res.json(profile))
                    })
            }
        })

});



module.exports = router;