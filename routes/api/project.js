const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
var convert = require('convert-units');

//load passport auth
const passport = require('passport');
const auth = passport.authenticate('jwt', {session: false});

//Load Model
const Project = require('../../models/Project');

//Load Validation
const validateProjectInput = require('../../validation/project');
mongoose.set('useFindAndModify', true);


//@ route GET api/project/test
//Test project route
//@ access public
router.get('/test',(req, res)=> {
    res.json({
        msg: "Project works"
    })
});

//@ route GET api/project/all
//Get all projects
//@ access public
router.get('/all', (req,res)=> {
    const errors = {}

    Project.find()
        .populate('user', ['name', 'avatar'])
        .then(projects=>{
            if(projects.length === 0){
                errors.noproject='There us no project'
                res.status(404).json(errors);
            } else {
            res.json(projects);
            }
        })
        .catch(err => res.status(500).json({msg: 'Server Error'}))
})


//@ route POST api/project
//Post new project
//@access private
router.post('/', auth, (req,res)=> {

    const{ errors, isValid}=validateProjectInput(req.body);
    //Check Validation
    if(!isValid){
        return res.status(400).json(errors)
    }

    const newProject = new Project ({
        user: req.user.id,
        name: req.body.name,
        owner: req.body.owner,
        imageURL: req.body.imageURL,
        projectType: req.body.projectType,
        location: req.body.location,
        totalAreaSqm: req.body.totalAreaSqm,
        totalAreaHa: convert(req.body.totalAreaSqm).from('m2').to('ha'),
        startYear: req.body.startYear,
        endYear: req.body.endYear,
        website: req.body.website,
        projectHandle: req.body.projectHandle
    })

    Project.find({user: req.user.id})
     .then(projects=> {
        if(projects.length === 0){
            newProject.save().then(project=> res.json(project))
        } else {
            
            Project.findOne({projectHandle: req.body.projectHandle})
                .then(project=> {
                    if(project){
                        if(project){
                            errors.msg = 'This Project handle already exists'
                            res.status(400).json(errors)
                        }
                    } else {
                        //Save Project
                        newProject.save().then(project=> res.json(project))
                    }
                })
                .catch(err => res.status(500).json({msg: 'Server Error'}))
        }
     })
    
      
})

//@ route GET api/project/:id
//Get projects by project id
//@ access public
router.get('/:id',  (req,res)=> {
    const errors = {}
    Project.findById(req.params.id)
        .populate('user', ['name', 'avatar'])
        .then(project => {
            if (!project){
                errors.noproject = 'Project not found';
                res.status(404).json(errors)
            } else {
                res.json(project)
            }
        })
        .catch(err => res.status(500).json({msg: 'Server Error'}))
   
})

//@ route DELETE api/project/delete/:id
//DELETE projects by project id
//@ access private
router.delete('/delete/:id', auth, (req,res)=> {
    const errors = {}

    Project.findById(req.params.id)
        .then(project=> {
            if(project.user.toString() !== req.user.id){
                errors.unAuth = 'User not Authorized'
                res.status(401).json(errors)
            } else {
                project.remove();
                res.json({msg: 'Project removed'})
            }
        })
        .catch(err => res.status(500).json(err))
   
})

//@ route GET api/project/
//Get current user project
//@ access private
router.get('/', auth, (req, res)=> {
    const errors = {};
    
    Project.find({user: req.user.id})
        .populate('user', ['name', 'avatar']) 
        .then(project=> {
            if(project.length === 0){
                errors.noproject= 'There is no project for this user';
                return res.status(404).json(errors)
            }else{
                res.json(project)
            }
            
        })
        .catch(err => res.status(404).json(err));
});

//@route PUT api/project/update/:id
//update exists project
//@access private
router.put('/update/:id', auth, (req,res)=> {
    const{ errors, isValid}=validateProjectInput(req.body);
    //Check Validation
    if(!isValid){
        return res.status(400).json(errors)
    }

    Project.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        .then(project=> {
            if(project.user.toString() !== req.user.id){
                errors.unAuth = 'User not Authorized'
                res.status(401).json(errors)
            } else {
                project.totalAreaHa= convert(req.body.totalAreaSqm).from('m2').to('ha');
               res.json(project)
            }
        })
        .catch(err => res.status(500).json(err))

})

module.exports = router;