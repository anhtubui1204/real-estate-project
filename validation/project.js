const Validator = require('validator');
const isEmpty = require('./is-Empty');

module.exports = function validateProjectInput(data){
    let errors = {}

    data.name = !isEmpty(data.name)? data.name : '';
    data.owner = !isEmpty(data.owner)? data.owner : '';
    data.projectType = !isEmpty(data.projectType)? data.projectType : '';
    data.totalArea = !isEmpty(data.totalArea)? data.totalArea : '';
    data.startYear = !isEmpty(data.startYear)? data.startYear : '';


    if (!Validator.isLength(data.name, {min: 2, max: 30})){
        errors.name = 'Name must be between 2 and 30 characters';
    }
    if (Validator.isEmpty(data.name)){
        errors.name = 'Name field is required';
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

    if (Validator.isEmpty(data.totalArea)){
        errors.totalArea = 'Area field is required';
    }
    if (!Validator.isFloat(data.totalArea)){
        errors.totalArea = 'Area must be Number';
    }
    
    if (Validator.isEmpty(data.startYear)){
        errors.startYear = 'Start Year field is required';
    }
    if (!Validator.isFloat(data.startYear)){
        errors.startYear = 'Start Year must be Number';
    }

    if (!Validator.isFloat(data.endYear)){
        errors.endYear = 'Start Year must be Number';
    }

    
    return {
        errors,
        isValid: isEmpty(errors)
    }
}