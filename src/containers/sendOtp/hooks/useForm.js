import { useState, useEffect } from 'react';
const useForm = ({ initialValues }) => {
  const initValues = { ...initialValues };
  const initTouched = { ...initialValues, username: false, email: false, password: false };
  const [values, setValues] = useState(initValues);
  const [touched, setTouched] = useState(initTouched);
  const [errors, setErrors] = useState();
  const [isValid, setIsValid] = useState(false);
  const handleChange = (fieldName, value) => {
    setValues({
      ...values,
      [fieldName]: value,
    });
  };
  const handleBlur = (fieldName, e) => {
    setTouched({
      ...touched,
      [fieldName]: e ? true : false,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      alert(JSON.stringify(values));
    }
  };
  const hasErrors = (fieldName) => {
    if (touched && errors) {
      return touched[fieldName] && errors[fieldName];
    }
  };
  const validateField = () => {
    const _isValid = true;
    const _errors = {};
    if (!values.username) {
      _isValid = false;
      Object.assign(_errors, { ..._errors, username: 'username is required' });
    }
    if (!values.password) {
      _isValid = false;
      Object.assign(_errors, { ..._errors, password: 'password is required' });
    }
    if (!values.email) {
      _isValid = false;
      Object.assign(_errors, { ..._errors, email: 'email is required' });
    }
    if (touched.username && !values.username) {
      _isValid = false;
      Object.assign(_errors, { ..._errors, username: 'username is required' });
    }
    if (touched.email && !values.email) {
      _isValid = false;
      Object.assign(_errors, { ..._errors, email: 'email is required' });
    }
    if (touched.password && !values.password) {
      _isValid = false;
      Object.assign(_errors, { ..._errors, password: 'password is required' });
    }
    if (values.username && values.username !== '' && values.username.length < 8) {
      _isValid = false;
      Object.assign(_errors, { ..._errors, username: 'username min 8 characters' });
    }
    if (values.password && values.password !== '' && values.password.length < 8) {
      _isValid = false;
      Object.assign(_errors, { ..._errors, password: 'password min 8 characters' });
    }
    if (values.email && values.email !== '' && !values.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      _isValid = false;
      Object.assign(_errors, { ..._errors, email: 'email is not valid' });
    }
    setErrors(_errors);
    setIsValid(_isValid);
  };
  useEffect(() => {
    validateField();
  }, [values, touched]);
  return {
    handleChange,
    handleSubmit,
    handleBlur,
    hasErrors,
    errors,
    values,
    touched,
    isValid,
  };
};
export default useForm;
