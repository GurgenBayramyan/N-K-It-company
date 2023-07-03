import React from 'react'
import style from './App.module.scss'
import Header from './component/header/Header'
import Content from './component/content/Content'
export default function App() {
  return (
    <div className={style.app}>
        <Header />
        <Content />
    </div>
  )
}
