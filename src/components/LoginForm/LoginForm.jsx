import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "../../components/ContactForm/ContactForm.module.css";
import { LoginUserSchema } from "../../utils/contactform";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

const INITIAL_VALUES = {
    email: "",
    password: "",
}
const LoginForm = () => {
      const dispatch = useDispatch();
    
    const handleSubmit = (values, actions) => {
        console.log('values: ', values);
        dispatch(login(values))
        actions.resetForm();
    }

    
  return (
    <div>
      <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit} validationSchema={LoginUserSchema}>
              <Form className={css.form}>
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
                  <button type="submit" className={ css.btn}>Sign In</button>
                  </Form>
          </Formik>
    </div>
  )
}

export default LoginForm;
