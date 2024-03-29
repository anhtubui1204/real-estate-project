const Validator = require('validator');
const isEmpty = require('./is-Empty');

module.exports = function validateLoginInput(data){
    let errors = {}

    //Convert all the value of null or undifined into a string of null
    data.email = !isEmpty(data.email)? data.email : '';
    data.password = !isEmpty(data.password)? data.password : '';
   
    if (!Validator.isEmail(data.email)){
        errors.email = 'Email is invalid';
    }
    if (Validator.isEmpty(data.email)){
        errors.email = 'Email field is required';
    }
    

    if (!Validator.isLength(data.password, {min: 6, max: 30})){
        errors.password = 'Password must be between 6 and 30 characters';
    }
    if (Validator.isEmpty(data.password)){
        errors.password = 'Password field is required';
    }

   
    return {
        errors,
        isValid: isEmpty(errors)
    }
}