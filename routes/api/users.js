const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/key');
const passport = require('passport');

//Load User model
const User = require('../../models/User');


//@ route GET api/users/test
//Test users route
//@ access public
router.get('/test',(req, res)=> {
    res.json({
        msg: "Users works"
    })
});

//@ route GET api/users/register
//Test users Registration
//@ access public
router.post('/register', (req, res)=> {
    User.findOne({email: req.body.email})
        .then(user => {
            if (user){
                return res.status(400).json({email: 'email already exists'});
            } else {
                const avatar=gravatar.url(req.body.email, {
                    s: '200',
                    r: 'pg',
                    d: 'mm'
                });
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    avatar,
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
    const email = req.body.email;
    const password = req.body.password;

    //Finding user by email
    User.findOne({email}).
        then(user => {
            //Check for user
            if (!user) {
                return res.status(404).json({email: 'User email not found'})
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
                        return res.status(400).json({password: 'Password incorrect'});
                    }
                })
        })
})

//route GET api/users/current
//return current user
// private access
router.get('/current', passport.authenticate('jwt', {session: false}), (req,res)=>{
    res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
    });
})




module.exports = router;