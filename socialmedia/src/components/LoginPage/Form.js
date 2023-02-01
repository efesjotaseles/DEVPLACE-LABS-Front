import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from '../../store';

import { Formik, ErrorMessage, Field } from "formik";
import * as yup from "yup";



const registerSchema = yup.object().shape({
    fname: yup.string().required("required"),
    lname: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required"),
    
  });
  
  const loginSchema = yup.object().shape({
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required"),
  });
  
  const initialValuesRegister = {
    fname: "",
    lname: "",
    email: "",
    password: "",
  };
  
  const initialValuesLogin = {
    email: "",
    password: "",
  };
  
  
  const Form = () => {
    const [pageType, setPageType] = useState("login");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLogin = pageType === "login";
    const isRegister = pageType === "register";
  
    const register = async (values, onSubmitProps) => {
        console.log(values);
        const savedUserResponse = await fetch(
          "http://localhost:3030/auth/register",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values)
          }
        );
        const savedUser = await savedUserResponse.json();
        console.log(savedUserResponse.status);

        if(savedUserResponse != 200){
            alert(savedUser.message)
        }
        if(savedUserResponse == 200){
            alert("registered")
            onSubmitProps.resetForm();
            
        }
        setPageType("login");
        
      };
    
      const login = async (values, onSubmitProps) => {
        const loggedInResponse = await fetch("http://localhost:3030/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        const loggedIn = await loggedInResponse.json();
        onSubmitProps.resetForm();
        
        console.log(loggedIn.user, loggedIn.token , loggedInResponse.status);
        if (loggedIn) {
          
          dispatch(
            setLogin({
              user: loggedIn.user,
              token: loggedIn.token,
            })
          );
          navigate("/home");
        }

      };
    
    const handleFormSubmit = async (values, onSubmitProps) => {
        if (isLogin) await login(values, onSubmitProps);
        if (isRegister) await register(values, onSubmitProps);
      };
  
    return(
      <Formik
      onSubmit={handleFormSubmit}
      initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
      validationSchema={isLogin ? loginSchema : registerSchema}
      >
        {({
          handleSubmit,
          resetForm,}) => (
          <form onSubmit={ handleSubmit } >
            {isRegister && (
                <>
                    <h3>Sign Up</h3>
    
                    <div className="mb-3">
                    <label>First name</label>
                    <Field
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        id="fname"
                        name="fname"
                        
                    />
                    <ErrorMessage name="fname" render={msg => <div className="error">{msg}</div>}/>
                    </div>
            
                    <div className="mb-3">
                    <label>Last name</label>
                    <Field
                        type="text" 
                        className="form-control" 
                        placeholder="Last name"
                        id="lname"
                        name="lname"
                    />
                    <ErrorMessage name="lname" render={msg => <div className="error">{msg}</div>}/>
                    </div>
                </>
                
            )}

                    <div className="mb-3">
                        <label>Email address</label>
                        <Field
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            name="email"
                            id="email"
                        />
                        <ErrorMessage name="email" render={msg => <div className="error">{msg}</div>}/>
                    </div>
        
                    <div className="mb-3">
                        <label>Password</label>
                        <Field
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        name="password"
                        id="password"
                        />
                        <ErrorMessage name="password" render={msg => <div className="error">{msg}</div>}/>
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">
                        {isLogin ? "LOGIN" : "REGISTER"}
                        </button>
                    </div>
                    <p className="forgot-password text-right">
                        <a onClick={() => {
                            setPageType(isLogin ? "register" : "login");
                            resetForm();
                        }} >
                            {isLogin
                            ? "Don't have an account? Sign Up here."
                            : "Already have an account? Login here."}
                        </a>
                    </p>
          </form>
        )} 
  
      </Formik>
    );
};

export default Form;