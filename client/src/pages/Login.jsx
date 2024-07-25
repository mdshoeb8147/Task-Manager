import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const user = "";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  useEffect(
    () => {
      user && navigate("/dashboard");
    },
    { user }
  );

  return <h1>login</h1>;
};
export default Login;
