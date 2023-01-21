import { useRef, useState } from "react";
import { Card, Button, Container, Form, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import classes from "./Auth.module.css";
import AuthForm from "./AuthForm";

const Auth = () => {
  const [isLogIn, setIsLogIn] = useState(true);
  const ref = useRef();
  const history=useHistory();

  const toggleHandler = () => {
    setIsLogIn((prevState) => {
      return !prevState;
    });
  };

  const submitFormHandler = async (event) => {
    event.preventDefault();
    const enteredEmail = ref.current.enteredEmail;
    const enteredPassword = ref.current.enteredPassword;
    let url;
    if (isLogIn) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAhgKk9amxMtnceYTYqWYkhVVuttRwgSLI";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAhgKk9amxMtnceYTYqWYkhVVuttRwgSLI";
    }
    try {
      const resp = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
      });

      const data = await resp.json();
      console.log(resp);

      if (!resp.ok) {
        throw new Error(data.error.message);
      } else {
        alert("login successfully");
        if(isLogIn){
          history.replace('/welcome')
        }
      else{
        history.replace('/')
      }
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <AuthForm
      isLogIn={isLogIn}
      toggleHandler={toggleHandler}
      ref={ref}
      submitFormHandler={submitFormHandler}
    />
  );
};

export default Auth;
