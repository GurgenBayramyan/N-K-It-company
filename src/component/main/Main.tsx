import React from 'react'
import style from './Main.module.scss'
export default function Main({name}:{name:string}) {
  return (
    <div className={style.task}>
        <div className={style.task_nameBlock}>
            <span>{name}</span>
            <span>...</span>
        </div>
        <div className={style.task_addBlock}>
            <span>+ add to card</span>
            <span>icon</span>
        </div>
    </div>
  )
}
