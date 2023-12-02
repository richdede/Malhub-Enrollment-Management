import { useState } from "react";

const Login = () => {
  return (
    <div className="Login">
      <form action="">
        <label htmlFor="name"></label>
        <input type="text" placeholder="username" name="username" />
        <label htmlFor="email"></label>
        <input type="email" placeholder="email" name="email" />
      </form>
    </div>
  );
};

export default Login;
