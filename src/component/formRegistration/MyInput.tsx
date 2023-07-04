import React from 'react'
import style from './MyInput.module.scss'
import { IInput } from './input'
export default function MyInput({placholder}:IInput) {
  if(placholder == "password"){
    return(
      <input className={style.input} type="password" placeholder={placholder} />
    )
  }
  return (
    <input className={style.input} type="text" placeholder={placholder} />
  )
}
