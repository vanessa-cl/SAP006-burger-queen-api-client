import { useEffect, useState } from 'react';
import { validateForm } from '../../services/validate';
import { createUser, loginUser } from '../../services/api';
import { useHistory } from 'react-router';
import { saveTokenAndRole } from '../../Utils/LocalStorage/LocalStorage';

const useForm = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
  });

  const [errors, setErrors] = useState('');

  useEffect(() => {
    return { errors }
  }, [errors])

  const handleChange = (e) => {
    return setValues(() => {
      const auxValues = { ...values };
      auxValues[e.target.name] = e.target.value;
      setErrors(() => validateForm(auxValues).message);
      return auxValues;
    });
  };

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(() => validateForm(values).message)
    if (validateForm(values).validationFulfilled === true) {
      createUser('/users', values)
        .then(res => res.json())
        .then(data => {
          if (data.role === 'attendant') {
            saveTokenAndRole(data.token, data.role);
            loginUser('/auth', data);
            history.push('/menu');
          } else if (data.role === 'chef') {
            saveTokenAndRole(data.token, data.role);
            loginUser('/auth', data);
            history.push('/kitchen');
          } else {
            setErrors(() => data.message);
          }
        })
        .catch(error => console.log(error))
    }
  };

  return { handleChange, handleSubmit, errors };
}

export default useForm;