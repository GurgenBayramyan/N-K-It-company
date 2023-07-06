import React from 'react'
import style from'./Button.module.scss'
import { IButton } from './ButtonTypes'
export default function Button({name}:IButton) {
  return (
    <button type='submit' className={style.btn}>{name}</button>
  )
}