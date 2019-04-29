const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Project Schema
const ProjectSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    projectType: {
        type: String,
        required: true
    },
    totalArea: {
        type: Number,
        required: true
    },
    startYear: {
        type: Number,
        required: true
    },
    endYear: {
        type: Number
        
    }

})

module.exports = Project = mongoose.model('project', ProjectSchema);