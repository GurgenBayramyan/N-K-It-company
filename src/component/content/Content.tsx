import React, { useState } from "react";
import style from "./Content.module.scss";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import FilterListIcon from '@mui/icons-material/FilterList';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Main from "../main/Main";
import { IState } from "./content";

export default function Content() {
  const [clasNameObj,setClasName] = useState<IState>({
    open:true
  })
  const handleClose = () => {
    setClasName({...clasNameObj,open:!clasNameObj.open})
  }
  
  return (
    <main className={style.main}>
      <div className={clasNameObj.open ? style.main_rightBlock:style.main_rightBlockClose}>
        <div className={style.main_rightBlock_head}>
          <div>
            <p className={style.one}>4</p>
            <p className={style.two}>48</p>
          </div>
          <div className={style.parent}>
              {clasNameObj.open ? <ChevronLeftIcon   sx={{cursor:"pointer"}} onClick={handleClose}/>: <ChevronRightIcon className={style.right} sx={{cursor:"pointer"}} onClick={handleClose} />}
          </div>
        </div>
      </div>
      <div className={style.main_content}>
        <div className={style.main_content_top}>
          <div className={style.main_content_top_rightBlock}>
            <h3>Tasks</h3>
            <StarBorderPurple500Icon  sx={{cursor:"pointer"}}/>
            <div className={style.main_content_top_rightBlock_work}>
              <p>Для рабочего пространства</p>
            </div>
            <div className={style.main_content_top_rightBlock_dosk}>
              <div className={style.dosk}>
                <p>По доске</p>
                <KeyboardArrowDownIcon  className={style.img}/>
              </div>

            </div>
          </div>
          <div className={style.main_content_top_leftBlock}>
                <div className={style.main_content_top_leftBlock_text}>
                    <RocketLaunchIcon  className={style.logo} sx={{cursor:"pointer"}}/>
                    <p>Улучшения</p>
                </div>
                <div className={style.main_content_top_leftBlock_text}>
                  <ElectricBoltIcon className={style.logo} sx={{cursor:"pointer"}}/>
                    <p>Автоматизация</p>
                </div>
                <div className={style.main_content_top_leftBlock_text}>
                  <FilterListIcon className={style.logo} sx={{cursor:"pointer"}}/>
                    <p>Фильтр</p>
                </div>
                <div className={style.main_content_top_leftBlock_text}>

                </div>
                <div className={style.main_content_top_leftBlock_text}>
                    <p>Поделиться</p>
                </div>
                <div className={style.main_content_top_leftBlock_text}>
                    <span>...</span>
                </div>
            </div>
        </div>
        <div className={style.blocks}>
        {/* <Main  name="todo"/>
        <Main  name="in progres"/>
        <Main  name="On hold"/>
        <Main name="Review" />
        <Main name="Done" />
        <Main name="Info" /> */}

        </div>
      </div>
    </main>
  );
}
