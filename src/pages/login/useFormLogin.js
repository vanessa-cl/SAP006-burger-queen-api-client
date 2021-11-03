import { useEffect, useState } from 'react';
import { loginUser } from '../../services/api';
import { useHistory } from 'react-router';

const useFormLogin = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState('');

  useEffect(() => {
    return errors;
  });

  const handleChange = (e) => {
    const auxValues = { ...values };
    auxValues[e.target.name] = e.target.value;
    setValues(auxValues);
  };

  const history = useHistory();
  const saveTokenAndRole = (token, role) => {
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser('/auth', values)
      .then(res => res.json())
      .then((data) => {
        if (data.role === 'attendant') {
          saveTokenAndRole(data.token, data.role);
          history.push('/menu');
        } else if (data.role === 'chef') {
          saveTokenAndRole(data.token, data.role);
          history.push('/kitchen');
        } else if (data.code === 400) {
          setErrors(data.message);
        }
      })
      .catch(error => console.log(error))
  };

  return { handleChange, handleSubmit, errors };
};

export default useFormLogin;