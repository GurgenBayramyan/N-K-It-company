import React from "react";
import style from "./App.module.scss";
import FormRegistration from "./component/formRegistration/FormRegistration";
import Login from "./loginPage/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./homePage/Home";
export default function App() {
  return (
    <div className={style.app}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<FormRegistration />} />
      </Routes>
    </div>
  );
}
