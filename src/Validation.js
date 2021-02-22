import joi from 'joi';


function validate(data,schema) {
    const options = { abortEarly: false };
    const { error } = joi.validate(data,schema, options);
    console.log(error)
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };
  // function validateArray(data,schema) {
  //   const options = { abortEarly: false };
  //   const options = { abortEarly: false };
  //   const { error } = joi.validate(data,schema, options);
  //   if (!error) return null;

  //   const errors = {};
  //   for (let item of error.details) errors[item.path[0]] = item.message;
  //   return errors;
  // };

 function  validateProperty( input,schema){
    const obj = { [input.name]: input.value };
    const schema1 = { [input.name]:schema[input.name] };
    const { error } = joi.validate(obj, schema1);
    return error ? error.details[0].message : null;
  };


  export default{
      validate,
      validateProperty,
  }