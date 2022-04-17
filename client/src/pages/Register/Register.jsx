import "./Register.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Axios from "axios";

function Register() {
  const handleClickRegister = (values) => {
    Axios.post("http://localhost:3001/register", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      alert(response.data.msg);
      console.log(response);
    });
  };
  const validationRegister = yup.object().shape({
    email: yup
      .string()
      .email("Insira um email válido")
      .required("Este campo é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha precisa ter pelo menos 8 caracteres")
      .required("Este campo é obrigatório"),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas não são iguais")
      .required("Este campo é obrigatório"),
  });
  return (
    <div className="app">
      <div className="app-body">
        <div className="container">
          <div className="content">
            <Formik
              initialValues={{}}
              onSubmit={handleClickRegister}
              validationSchema={validationRegister}
            >
              <Form className="form">
                <div className="section">
                  <div className="register-form-group">
                    <Field
                      name="email"
                      className="form-field"
                      placeHolder="Email"
                    />

                    <ErrorMessage
                      component="span"
                      name="email"
                      className="form-error"
                    />
                  </div>
                  <div className="form-group">
                    <Field
                      name="password"
                      className="form-field"
                      placeHolder="Senha"
                    />

                    <ErrorMessage
                      component="span"
                      name="password"
                      className="form-error"
                    />
                  </div>
                  <div className="form-group">
                    <Field
                      name="passwordConfirmation"
                      className="form-field"
                      placeHolder="Confirme sua senha"
                    />

                    <ErrorMessage
                      component="span"
                      name="passwordConfirmation"
                      className="form-error"
                    />
                  </div>
                  <button className="button" type="submit">
                    Registrar
                  </button>
                  <div className="register">
                    Já possui uma conta?ﾠ
                    <a className="register-link" href="/login">
                      Conecte-se
                    </a>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
