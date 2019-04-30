const Validator = require('validator');
const isEmpty = require('./is-Empty');

module.exports = function validateProjectInput(data){
    let errors = {}

    //Convert all the value of null or undifined into a string of null
    data.name = !isEmpty(data.name)? data.name : '';
    data.owner = !isEmpty(data.owner)? data.owner : '';
    data.projectType = !isEmpty(data.projectType)? data.projectType : '';
    data.location = !isEmpty(data.location)? data.location : '';
    data.totalAreaSqm = !isEmpty(data.totalAreaSqm)? data.totalAreaSqm : '';
    data.startYear = !isEmpty(data.startYear)? data.startYear : '';
    data.imageURL = !isEmpty(data.imageURL)? data.imageURL : '';
    data.endYear = !isEmpty(data.endYear)? data.endYear : '';
    data.projectHandle = !isEmpty(data.projectHandle)? data.projectHandle : '';

    if (!Validator.isLength(data.name, {min: 2, max: 30})){
        errors.name = 'Name must be between 2 and 30 characters';
    }
    if (Validator.isEmpty(data.name)){
        errors.name = 'Name field is required';
    }

    if (Validator.isEmpty(data.location)){
        errors.location = 'Location field is required';
    }

    if (Validator.isEmpty(data.projectHandle)){
        errors.projectHandle = 'Handle field is required';
    }

    if (!Validator.isLength(data.owner, {min: 2, max: 30})){
        errors.owner = 'Owner must be between 2 and 30 characters';
    }
    if (Validator.isEmpty(data.owner)){
        errors.owner = 'Owner field is required';
    }

    if (!Validator.isLength(data.projectType, {min: 2, max: 30})){
        errors.projectType = 'Project Type must be between 2 and 30 characters';
    }
    if (Validator.isEmpty(data.projectType)){
        errors.projectType = 'Project Type field is required';
    }

    if (Validator.isEmpty(data.totalAreaSqm)){
        errors.totalAreaSqm = 'Area field is required';
    }
    if (!Validator.isFloat(data.totalAreaSqm)){
        errors.totalAreaSqm = 'Area must be Number';
    }
    
    if (Validator.isEmpty(data.startYear)){
        errors.startYear = 'Start Year field is required';
    }
    if (!Validator.isFloat(data.startYear)){
        errors.startYear = 'Start Year must be Number';
    }

    if(!isEmpty(data.endYear)){
        if (!Validator.isFloat(data.endYear)){
            errors.endYear = 'Start Year must be Number';
        }
    }       

    if(!isEmpty(data.imageURL)){
        if(!Validator.isURL(data.imageURL)){
            errors.imageURL = 'Invalid URL'
        }
    }
    if(!isEmpty(data.website)){
        if(!Validator.isURL(data.website)){
            errors.website = 'Invalid URL'
        }
    }

    
    return {
        errors,
        isValid: isEmpty(errors)
    }
}