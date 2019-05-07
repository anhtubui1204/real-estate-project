const Validator = require('validator');
const isEmpty = require('./is-Empty');

module.exports = function validateProfileInput(data){
    let errors = {}

    //Convert all the value of null or undifined into a string of null
    data.handle = !isEmpty(data.handle)? data.handle : '';
    data.status = !isEmpty(data.status)? data.status : '';
    data.phone = !isEmpty(data.phone)? data.phone : '';
   
    if(!Validator.isLength(data.handle, {min:2, max:40})){
        errors.handle = 'Handle need to be between 2 and 40 characters'
    }
    if (Validator.isEmpty(data.handle)){
        errors.handle = 'Handle field is required';
    }
   
    if (!Validator.isMobilePhone(data.phone, 'vi-VN', true)){
        errors.phone = 'invalid phone number';
    }
    if (Validator.isEmpty(data.phone)){
        errors.phone = 'Phone number field is required';
    }

    if (Validator.isEmpty(data.status)){
        errors.status = 'Status field is required';
    }
   
    //Validator for website URL
    if(!isEmpty(data.website)){
        if(!Validator.isURL(data.website)){
            errors.website = 'Invalid URL'
        }
    }

    //Validator for social media
    if(!isEmpty(data.youtube)){
        if(!Validator.isURL(data.youtube)){
            errors.youtube = 'Invalid URL'
        }
    }

    if(!isEmpty(data.twitter)){
        if(!Validator.isURL(data.twitter)){
            errors.twitter = 'Invalid URL'
        }
    }

    if(!isEmpty(data.facebook)){
        if(!Validator.isURL(data.facebook)){
            errors.facebook = 'Invalid URL'
        }
    }

    if(!isEmpty(data.linkedIn)){
        if(!Validator.isURL(data.linkedIn)){
            errors.linkedIn = 'Invalid URL'
        }
    }

    if(!isEmpty(data.instagram)){
        if(!Validator.isURL(data.instagram)){
            errors.instagram = 'Invalid URL'
        }
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}