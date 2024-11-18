import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "../../components/ContactForm/ContactForm.module.css";
import { RegisterUserSchema } from "../../utils/contactform";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const INITIAL_VALUES = {
    name: "",
    email: "",
    password: "",
}

const RegistrationForm = () => {
    const dispatch = useDispatch();
    
    const handleSubmit = (values, actions) => {
        console.log('values: ', values);
      dispatch(register(values)).unwrap().catch((error) => {
        if (error === "Request failed with status code 400") {
          toast("User with this email already exists");
        }
          
        })
        actions.resetForm();
    }


  return (
    <div>
          <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit} validationSchema={RegisterUserSchema}>
              <Form className={css.form}>
              <label className={css.label}>
                      <div className={css.labelName}>Name</div>
                      <Field className={css.input } type="text" name="name" placeholder="Ivan Ivanov" />
<ErrorMessage className={css.errorMessage } name="name" component="span" />
              </label>
              <label className={css.label}>
                      <div className={css.labelName}>Email</div>
                      <Field className={css.input } type="text" name="email" placeholder="example.email@example.com" />
<ErrorMessage className={css.errorMessage } name="email" component="span" />
              </label>
              <label className={css.label}>
                      <div className={css.labelName}>Password</div>
                      <Field className={css.input } type="password" name="password" placeholder="Enter your password"  />
<ErrorMessage className={css.errorMessage } name="password" component="span" />
                  </label>
                  <button type="submit" className={ css.btn}>Sign Up</button>
                  </Form>
      </Formik>
       <ToastContainer/>
    </div>
  )
  
}

export default RegistrationForm;
