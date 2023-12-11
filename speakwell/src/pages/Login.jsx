
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {PATHS} from "../routes/consts";
import styles from './Login.module.scss'; 
import {Link} from 'react-router-dom';
import {loginUser} from "../api/users";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Programs from "./Programs";

const Login = () => {
  const navigate = useNavigate()
  const [error, setError] = useState('');
  const initialValues = {
    username: '',
    password: '',
  };

  const handleSubmit = async (values) => {
    try {
     const response = await loginUser(values)
     if (response) {
      console.log(response)
setError("")
navigate (PATHS.Programs)
     }
     else {
setError("Username or password is incorrect")
     }
    } catch (error) {
      console.error(error)
    }
    console.log('Form submitted with values:', values);
  };

  const validate = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = 'Required';
    }

    if (!values.password) {
      errors.password = 'Required';
    }

    return errors;
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validate={validate}
    >
      <Form className={styles.loginForm}> 
        <div className={styles.formGroup}>
          <h2>Prisijungimas</h2>
          <label htmlFor="username">Vartotojo vardas:</label>
          <Field type="text" id="username" name="username" />
          <ErrorMessage name="username" component="div" className="error-message" />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">Slaptažodis:</label>
          <Field type="password" id="password" name="password" />
          <ErrorMessage name="password" component="div" className="error-message" />
          {error && <div>{error}</div>}
        </div>

        <button type="submit">Prisijungti</button>
        <div>

          Naujas vartotojas? 
          <Link to={PATHS.Register}><span>Spausti čia</span></Link>
        </div>
      </Form>
    </Formik>
  );
};

export default Login;
