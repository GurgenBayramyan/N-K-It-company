import React from "react";
import style from "./Content.module.scss";
import leftIIcon from "../../icons/left-chevron.png";
import starImg from "../../icons/star.png";
import contactImg from "../../icons/contact-me.png";
import rowImage from "../../icons/down.png";
export default function Content() {
  return (
    <main className={style.main}>
      <div className={style.main_rightBlock}>
        <div className={style.main_rightBlock_head}>
          <div>
            <p className={style.one}>4</p>
            <p className={style.two}>48</p>
          </div>
          <div>
            <img src={leftIIcon} alt="leftIcon" />
          </div>
        </div>
      </div>
      <div className={style.main_content}>
        <div className={style.main_content_top}>
          <div className={style.main_content_top_rightBlock}>
            <h3>Tasks</h3>
            <img src={starImg} alt="star" />
            <div className={style.main_content_top_rightBlock_work}>
              <img src={contactImg} alt="alt" />
              <p>Для рабочего пространства</p>
            </div>
            <div className={style.main_content_top_rightBlock_dosk}>
              <div className={style.dosk}>
                <p>По доске</p>
              </div>

              <img src={rowImage} alt="row_img" />
            </div>
          </div>
          <div className={style.main_content_top_leftBlock}>
                <div className={style.main_content_top_leftBlock_text}>
                    <p>Улучшения</p>
                </div>
                <div className={style.main_content_top_leftBlock_text}>
                    <p>Автоматизация</p>
                </div>
                <div className={style.main_content_top_leftBlock_text}>
                    <p>Фильтр</p>
                </div>
                <div className={style.users}>
                    <img src={contactImg} alt="" />
                </div>
                <div className={style.shareBlock}>
                    <p>Поделиться</p>
                </div>
                <div className={style.continue}>
                    <span>...</span>
                </div>
            </div>
        </div>
      </div>
    </main>
  );
}
