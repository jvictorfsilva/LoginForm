import "./App.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Axios from "axios";

function App() {
  const handleClickLogin = (values) => {
    Axios.post("http://localhost:3001/login", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      alert(response.data.msg);
    });
  };
  const handleClickRegister = (values) => {
    Axios.post("http://localhost:3001/register", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      alert(response.data.msg);
      console.log(response);
    });
  };

  const validationLogin = yup.object().shape({
    email: yup
      .string()
      .email("Insira um email válido")
      .required("Este campo é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha precisa ter pelo menos 8 caracteres")
      .required("Este campo é obrigatório"),
  });
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
            <div className="logo-text">
              <div></div>
              <h1>Faça o login para acessar a aplicação</h1>
            </div>
            <Formik
              initialValues={{}}
              onSubmit={handleClickLogin}
              validationSchema={validationLogin}
            >
              <Form className="form">
                <div className="section">
                  <div className="login-form-group">
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
                </div>
                <button className="button" type="submit">
                  Login
                </button>
                <div className="line"></div>
                <div className="register">
                  <button className="register-button" type="submit">
                    Cadastre-se
                  </button>
                </div>
              </Form>
            </Formik>
            {/*---------------------------------------------------------------------------------------------------------*/}

            {/* <h1>Cadastro</h1>
      <Formik
        initialValues={{}}
        onSubmit={handleClickRegister}
        validationSchema={validationRegister}
      >
        <Form className="register-form">
          <div className="register-form-group">
            <Field name="email" className="form-field" placeHolder="Email" />

            <ErrorMessage
              component="span"
              name="email"
              className="form-error"
            />
          </div>
          <div className="form-group">
            <Field name="password" className="form-field" placeHolder="Senha" />

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
        </Form>
      </Formik> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
