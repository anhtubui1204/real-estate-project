const Validator = require('validator');
const isEmpty = require('./is-Empty');

module.exports = function validateAdsInput(data){
    let errors = {}

    //Convert all the value of null or undifined into a string of null
    data.title = !isEmpty(data.title)? data.title : '';
    data.price = !isEmpty(data.price)? data.price : '';
    data.areaSqm = !isEmpty(data.areaSqm)? data.areaSqm : '';
    data.nBedRooms = !isEmpty(data.nBedRooms)? data.nBedRooms : '';
    
    data.nFloors = !isEmpty(data.nFloors)? data.nFloors : '';
    data.name = !isEmpty(data.name)? data.name : '';
    data.phone = !isEmpty(data.phone)? data.phone : '';
    data.imageMain = !isEmpty(data.imageMain)? data.imageMain : '';
    data.image1 = !isEmpty(data.image1)? data.image1 : '';
    data.image2 = !isEmpty(data.image2)? data.image2 : '';
    data.image3 = !isEmpty(data.image3)? data.image3 : '';
    

    if (!Validator.isLength(data.title, {min: 2, max: 30})){
        errors.title = 'Title must be between 2 and 30 characters';
    }
    if (Validator.isEmpty(data.title)){
        errors.title = 'Title field is required';
    }

    if (!Validator.isFloat(data.price)){
        errors.price = 'Area must be Number';
    }
    if (Validator.isEmpty(data.price)){
        errors.price = 'Area field is required';
    }
    
    if (!Validator.isFloat(data.areaSqm)){
        errors.areaSqm = 'Area must be Number';
    }
    if (Validator.isEmpty(data.areaSqm)){
        errors.areaSqm = 'Area field is required';
    }
    
    if (!Validator.isFloat(data.nBedRooms)){
        errors.nBedRooms = 'Number of Bed Rooms must be Number';
    }
    if (Validator.isEmpty(data.nBedRooms)){
        errors.nBedRooms = 'Number of Bed Rooms field is required';
    }
    
    if (!Validator.isFloat(data.nFloors)){
        errors.nFloors = 'Number of floors must be Number';
    }
    if (Validator.isEmpty(data.nFloors)){
        errors.nFloors = 'Number of floors field is required';
    }
    
    if (Validator.isEmpty(data.name)){
        errors.name = 'Contact name field is required';
    }

    if (!Validator.isMobilePhone(data.phone, 'vi-VN', true)){
        errors.phone = 'invalid phone number';
    }
    if (Validator.isEmpty(data.phone)){
        errors.phone = 'Phone number field is required';
    }
    

    if (Validator.isEmpty(data.imageMain)){
        errors.imageMain = 'URL for Main Image is required';
    } else {
        if(!Validator.isURL(data.imageMain)){
            errors.imageMain = 'Invalid URL'
        }
    }

    if(!isEmpty(data.image1)){
        if(!Validator.isURL(data.image1)){
            errors.image1 = 'Invalid URL'
        }
    }

    if(!isEmpty(data.image2)){
        if(!Validator.isURL(data.image2)){
            errors.image2 = 'Invalid URL'
        }
    }

    if(!isEmpty(data.image3)){
        if(!Validator.isURL(data.image3)){
            errors.image3 = 'Invalid URL'
        }
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}