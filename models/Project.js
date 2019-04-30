const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Project Schema
const ProjectSchema = new Schema ({
    user:{
        type: Schema.Types.ObjectId, //this means each profile will associate the user by its id
        ref: 'users' //reference from users collection
    },
    projectHandle:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    imageURL:{
        type: String,
        required: true
    },
    projectType: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    totalAreaSqm: {
        type: Number,
        required: true
    },
    totalAreaHa: {
        type: Number,
        
    },
    website: {
        type: String
    },
    startYear: {
        type: Number,
        required: true
    },
    endYear: {
        type: Number
        
    },
    postDate: {
        type: Date,
        default: Date.now
    },

})

module.exports = Project = mongoose.model('project', ProjectSchema);