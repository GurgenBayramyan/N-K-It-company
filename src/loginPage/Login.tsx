import React from "react";
import MyInput from "../component/formRegistration/MyInput";
import style from "./Login.module.scss";
import Button from "../component/buttonSubmit/Button";
export default function Login() {
  return (
    <>
      <div className={style.loginPage}>
        <h2>login</h2>
        <form>
          <MyInput placholder="email" />
          <MyInput placholder="password" />
          <Button name="login"></Button>
        </form>
      </div>
    </>
  );
}
