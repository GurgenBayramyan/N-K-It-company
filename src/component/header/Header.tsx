import React from 'react'
import style from './Header.module.scss'
import appImg from '../../icons/app-drawer.png'
import treloIcon from '../../icons/trello.png'
import imgDown from '../../icons/down-chevron.png'
import searchIcon from '../../icons/search.png'
import bellImg from '../../icons/notification.png'
import integrator from '../../icons/interrogation.png'
import theme from '../../icons/mockup.png'
import userImg from '../../icons/man.png'
export default function Header() {
  return (
    <header className={style.header}>
        <div className={style.header_navbar}>
            <div className={style.header_navbar_buttonBlock}>
                <img src={appImg} alt="imgApp" />
            </div>
            <div className={style.header_navbar_iconTreloBlock}>
                <img src={treloIcon} alt="img" />
                <span>Trello</span>
            </div>
            <div className={style.header_navbar_textBlock}>
                <span>Рабочие пространства</span>
                <img src={imgDown} alt="img" />
            </div>
            <div className={style.header_navbar_textBlock}>
                <span>Недавние</span>
                <img src={imgDown} alt="img" />
            </div>
            <div className={style.header_navbar_textBlock}>
                <span> В избранном</span>
                <img src={imgDown} alt="img" />
            </div>
            <div className={style.header_navbar_textBlock}>
                <span>Шаблоны</span>
                <img src={imgDown} alt="img" />
            </div>
            <div className={style.header_navbar_search}>
                <span>Создать</span>
            </div>
        </div>
        <div className={style.header_search_block}>
            <div className={style.header_search_block_inputBlock}>
                <input type="text"  placeholder='Поиск'/>
                <img className={style.header_search_block_inputBlock_icon} src={searchIcon} alt="search" title='search' />
            </div>
            <div className={style.header_search_block_userBlock}>
                <img src={bellImg} alt="icons" />
                <img src={integrator} alt="integrator" />
                <img src={theme} alt="theme" />
                <img src={userImg} alt="user_img" title='user' />
            </div>
        </div>
    </header>
  )
}
