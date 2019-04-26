const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Profile Schema
const ProfileSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId, //this means each profile will associate the user by its id
        ref: 'users' //reference from users collection
    },
    handle:{
        type: String,
        required: true,
        max: 40
    },
    company: {
        type: String
    },
    website: {
        type: String
    },
    location: {
        type: String
    },
    status: {
        type: String,
        required: true
    },
    bio: {
        type: String
    },
    
    social: {
        youtube: {
            type: String
        },
        twitter: {
            type: String
        },
        facebook: {
            type: String
        },
        linkedIn: {
            type: String
        },
        instagram: {
            type: String
        }
    },
    date: {
        type: Date,
        default: Date.now
    }   
})

module.exports = Profile = mongoose.model('profile', ProfileSchema);