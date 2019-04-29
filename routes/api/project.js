const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

//Load Model
const Project = require('../../models/Project');

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
        .then(projects=>{
            if(!projects){
                errors.noproject='There us no project'
                res.status(404).json(errors);
            } else {
            res.json(projects);
            }
        })
        .catch(err=> res.status(404).json({noproject: 'There is no project'}))
})


//@ route POST api/project
//Post new project
//@access public
router.post('/', (req,res)=> {
    
})


module.exports = router;