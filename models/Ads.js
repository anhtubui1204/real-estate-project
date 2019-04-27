const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Ads schema

const AdsSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
})