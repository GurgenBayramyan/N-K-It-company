import React from 'react'
import style from './FormRegistration.module.scss'
import MyInput from './MyInput'
import Button from '../buttonSubmit/Button'
export default function FormRegistration() {
  return (
    <div className={style.form}>
        <form >
            <div className={style.form_block}>
                <h2>Hello friend!</h2>
                <MyInput  placholder='firstname'/>
                <MyInput  placholder='lastName'/>
                <MyInput  placholder='gender'/>
                <MyInput  placholder='email'/>
                <MyInput  placholder='age'/>
                <Button  name='Registration'/>
            </div>
            <div className={style.form_info}>
                <h2>Glad to see You!</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
        </form>
    </div>
  )
}
