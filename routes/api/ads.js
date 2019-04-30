const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//load passport auth
const passport = require('passport');
const auth = passport.authenticate('jwt', {session: false});

//Load Model
const Project = require('../../models/Project');
const Ads = require('../../models/Ads');

//Load Validator
const validateAdsInput = require('../../validation/ads');

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
router.post('/', auth, (req, res)=> {
    const{ errors, isValid}=validateAdsInput(req.body);
    //Check Validation
    if(!isValid){
        return res.status(400).json(errors)
    }

    const {
        project,
        title,
        price, 
        areaSqm, 
        nBedRooms, 
        nFloors, 
        direction, 
        street, 
        district, 
        city, 
        name,
        phone,
        imageMain,
        image1,
        image2,
        image3 
    } = req.body 

    const newAds = new Ads ({
        user: req.user.id,
        project: project,
        title: title,
        price: price,
        areaSqm: areaSqm,
        nBedRooms: nBedRooms,
        nFloors: nFloors,
        direction: direction,
        address: {
            street: street,
            district: district,
            city: city
        },
        contactInfo: {
            name: name,
            phone: phone
        },
        imageURL: {
            imageMain: imageMain,
            otherImgages: {
                image1: image1,
                image2: image2,
                image3: image3
            }
        }
    })

    Project.find({_id: project})
        .then(projects=>{
            if(projects.length === 0){
                errors.msg = 'Project does not exist'
                res.status(400).json(errors)
            }else {
                newAds.save().then(ads=> res.json(ads))
            }
        })
        .catch(err => res.status(500).json({msg: 'Server Error'}))

})


//@route GET api/ads
//GET current user ads
//@access private
router.get('/', auth, (req, res)=> {
    const errors = {}

    Ads.find({user: req.user.id})
        .populate('user', ['name', 'avatar'])
        .populate('project', ['name', 'owner'])
        .then(ads=>{
            if(ads.length===0){
                errors.noads= 'There is no ads for this user';
                return res.status(404).json(errors)
            }else{
                res.json(ads)
            }
        })
        .catch(err => res.status(404).json(err));
})

//@route GET api/ads/all
//GET all ads
//access public
router.get('/all', (req,res)=> {
    const errors = {}

    Ads.find()
        .populate('user', ['name', 'avatar'])
        .populate('project', ['name', 'owner'])
        .then(ads=>{
            if(ads.length === 0){
                errors.noads='There is no Ads'
                res.status(404).json(errors);
            } else {
            res.json(ads);
            }
        })
        .catch(err => res.status(500).json({msg: 'Server Error'}))
})

//@route GET api/ads/:id
//GET ads by id
//Access public
router.get('/:id',  (req,res)=> {
    const errors = {}
    Ads.findById(req.params.id)
        .populate('user', ['name', 'avatar'])
        .populate('project', ['name', 'owner'])
        .then(ads => {
            if (!ads){
                errors.noads = 'Ads not found';
                res.status(404).json(errors)
            } else {
                res.json(ads)
            }
        })
        .catch(err => res.status(500).json({msg: 'Server Error'}))
   
})

//@route GET api/ads/project/:id
//GET ads by project id
//Access public
router.get('/project/:id',  (req,res)=> {
    const errors = {}
    Ads.find({project: req.params.id})
        .populate('user', ['name', 'avatar'])
        .populate('project', ['name', 'owner'])
        .then(ads => {
            if (ads.length===0){
                errors.noads = 'Ads not found';
                res.status(404).json(errors)
            } else {
                ads
                
                res.json(ads)
            }
        })
        .catch(err => res.status(500).json({msg: 'Server Error'}))
   
})

//@route DELETE api/ads/:id
//DELETE ads
//access private
router.delete('/delete/:id', auth, (req,res)=> {
    const errors = {}

    Ads.findById(req.params.id)
        .then(ads=> {
            if(ads.user.toString() !== req.user.id){
                errors.unAuth = 'User not Authorized'
                res.status(401).json(errors)
            } else {
                ads.remove();
                res.json({msg: 'ads removed'})
            }
        })
        .catch(err => res.status(500).json(err))
   
})

//@route PUT api/ads/:id
//Update ads
//access private
router.put('/update/:id', auth, (req,res)=> {
    const{ errors, isValid}=validateAdsInput(req.body);
    //Check Validation
    if(!isValid){
        return res.status(400).json(errors)
    }

    Ads.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        .then(ads=> {
            if(ads.user.toString() !== req.user.id){
                errors.unAuth = 'User not Authorized'
                res.status(401).json(errors)
            } else {
                
               res.json(ads)
            }
        })
        .catch(err => res.status(500).json(err))

})


module.exports = router;

