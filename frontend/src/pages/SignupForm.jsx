import React, { useEffect } from "react";
import Signup from "../components/Signup";
import Mainlayout from "../layouts/Mainlayout";

const SignupForm = () => {
  useEffect(() => {
    document.title = "Signup";
  }, []);
  return (
    <>
      <Mainlayout>
        <Signup />
      </Mainlayout>
    </>
  );
};

export default SignupForm;
