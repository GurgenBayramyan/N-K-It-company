import React from "react";
import MyInput from "../component/formRegistration/MyInput";
import Button from "../component/buttonSubmit/Button";
import style from "./Login.module.scss";
export default function Login() {
  return (
    <>
      <div className={style.loginPage}>
        <h2>login</h2>
        <form>
          <MyInput placholder="email" />
          <MyInput placholder="password" />
          <Button name="logIn" />
        </form>
      </div>
    </>
  );
}
