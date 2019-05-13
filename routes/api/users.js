const express = require('express');
const router = express.Router();
// const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/key');
const passport = require('passport');
const mongoose = require('mongoose');

//Load User model
const User = require('../../models/User');
mongoose.set('useFindAndModify', true);

//Load input validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

const auth =  passport.authenticate('jwt', {session: false})

//@ route GET api/users/test
//Test users route
//@ access public
router.get('/test',(req, res)=> {
    res.json({
        msg: "Users works"
    })
});

//@ route POST api/users/register
//Test users Registration
//@ access public
router.post('/register', (req, res)=> {
    
    const{errors, isValid} = validateRegisterInput(req.body);

    //Check Validation
    if(!isValid){
        return res.status(400).json(errors)
    }

    User.findOne({email: req.body.email})
        .then(user => {
            if (user){
                errors.email='email already exists';
                return res.status(400).json(errors);
            } else {
                
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    avatar: req.body.avatar,
                    password: req.body.password
                });

                bcrypt.genSalt(10, (err, salt)=>{
                    bcrypt.hash(newUser.password, salt, (err, hash)=> { //we use bcrypt.js for hashing password
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user => res.json(user))
                            .catch(err=> console.log(err))
                    })
                })
            }
        })
})

//@Route POST api/users/login
// Login user / Returning JWT Token -> JWT is used for user authorization
//@access public
router.post('/login', (req, res)=> {

    const {errors, isValid} = validateLoginInput(req.body);
     //Check Validation
     if(!isValid){
        return res.status(400).json(errors)
    }

    const email = req.body.email;
    const password = req.body.password;

    //Finding user by email
    User.findOne({email})
        .then(user => {
            //Check for user
            if (!user) {
                errors.email='User email not found';
                return res.status(404).json(errors)
            }
            //Check password
            bcrypt.compare(password, user.password)
                .then(isMatch=> {
                    if(isMatch){
                        
                        //Create JWT Payload 
                        //we parse in the user id, user name and avatar to a payload.
                        //JWT will generate this payload into a unique token
                        const payload = {id: user.id, name: user.name, avatar: user.avatar}                  

                        //Create JWT Token for User authorization
                        jwt.sign(payload, keys.secretOrKey, {expiresIn: 3600}, (err, token)=> {
                            res.json({
                                success: true,
                                token: 'Bearer ' + token
                            })
                        });
                    } else {
                        errors.password='Password incorrect';
                        return res.status(400).json(errors);
                    }
                })
        })
})

//route GET api/users/current
//return current user
// private access
router.get('/current',auth, (req,res)=>{
    res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
    });
})

//@route GET api/ads/all
//GET all ads
//access public
router.get('/all', (req,res)=> {
    User.find()
        .then(user=>{
            if(user.length === 0){
                errors.nouser='There is no user'
                res.status(404).json(errors);
            } else {
            res.json(user);
            }
        })
        .catch(err => res.status(500).json({msg: 'Server Error'}))
})

module.exports = router;