
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {createUser} from "../api/users";
import {Link, useNavigate} from 'react-router-dom';
import {PATHS} from "../routes/consts";
import styles from "../pages/Register.module.scss";

const Register = () => {

  const navigate = useNavigate();
  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const onSubmit = async (values) => {
    try {
      await createUser(values)
      navigate(PATHS.Login)
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

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    }

    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={validate}
    >
      <Form>
      <div className={styles.registrationForm}>
        <h2>Registracija</h2>
        <div className={styles.inputField}>
          <label htmlFor="username">Vartotojo vardas:</label>
          <Field type="text" id="username" name="username" />
          <ErrorMessage name="username" component="div" />
        </div>

        <div className={styles.inputField}>
          <label htmlFor="email">El.paštas:</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>

        <div className={styles.inputField}>
          <label htmlFor="password">Slaptažodis:</label>
          <Field type="password" id="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </div>

        <div className={styles.inputField}>
          <label htmlFor="confirmPassword">Pakartokite slaptažodį</label>
          <Field type="password" id="confirmPassword" name="confirmPassword" />
          <ErrorMessage name="confirmPassword" component="div" />
        </div>

        <button type="submit">Registruotis</button>
        </div>
      </Form>
    </Formik>
  );
};

export default Register;
