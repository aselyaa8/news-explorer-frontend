import { useState, useEffect } from 'react';

export function signInValidate(values) {
    let errors = {};
    if (!values.email) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be 8 or more characters';
    }
    return errors;
  };

export function signUpValidate(values){
    let errors = signInValidate(values);
    if(!values.username){
      errors.username = 'Username is required'
    } else if (values.username.length < 2) {
      errors.username = 'Username must be 2 or more characters'
    }
    return errors;
  }

export function useForm(callback, validate){
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(()=>{
    if(Object.keys(errors).length === 0 && isSubmitting){
      callback();
      setIsSubmitting(false);
    }
  },[errors]);

  useEffect(()=>{
    setErrors(validate(values));
  },[values]);

 const handleChange = (event) => {
  event.preventDefault();
  setValues(values => ({ ...values, [event.target.name]: event.target.value }));
 }

 const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
 }

 return {
   handleChange,
   handleSubmit,
   values,
   errors,
 }
}

