import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Login from "../components/Login";
import Mainlayout from "../layouts/Mainlayout";

const LoginForm = () => {
  const { state } = useLocation();
  const redirectUrl = state?.redirectUrl || null;

  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <>
      <Mainlayout>
        <Login redirectUrl={redirectUrl} />
      </Mainlayout>
    </>
  );
};

export default LoginForm;
