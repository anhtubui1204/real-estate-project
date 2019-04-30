const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Ads schema

const AdsSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    project: {
        type: Schema.Types.ObjectId,
        ref: 'project'
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    areaSqm: {
        type: Number,
        required: true
    },
    nBedRooms: {
        type: Number,
        required: true
    },
    nFloors: {
        type: Number,
        required: true
    },
    direction: {
        type: String
    },
    address: {
        street: {
            type: String
        },
        district: {
            type: String
        },
        city: {
            type: String
        }
        
    },
    contactInfo: {
        name: {
            type: String,
            required: true
        },
        phone: {
            type: Number,
            required: true
        }
    },
    postDate: {
        type: Date,
        default: Date.now
    },
    imageURL: {
        imageMain: {
            type: String,
            required: true
        },
        otherImgages: {
            image1: {
                type: String
            },
            image2: {
                type: String
            },
            image3: {
                type: String
            }
        }
    }
})

module.exports = Ads = mongoose.model('ads', AdsSchema);