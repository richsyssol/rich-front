import React from "react";
import { useSEO } from "../../hooks/useSEO";

const LoginPage = () => {
  useSEO("login");

  return <div className="mt-80">Hello this is Login us page</div>;
};

export default LoginPage;
