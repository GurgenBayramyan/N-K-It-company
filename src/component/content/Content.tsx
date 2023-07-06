import React, { useState } from "react";
import style from "./Content.module.scss";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import FilterListIcon from "@mui/icons-material/FilterList";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import GroupIcon from "@mui/icons-material/Group";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import ListIcon from "@mui/icons-material/List";
import Main from "../main/Main";
import { IState } from "./ContentTypes";

export default function Content() {
  const [clasNameObj, setClasName] = useState<IState>({
    open: true,
    menu: true,
    menuRight: true,
  });
  const handleClose = () => {
    setClasName({ ...clasNameObj, open: !clasNameObj.open });
  };
  const handleMenu = () => {
    setClasName({ ...clasNameObj, menu: !clasNameObj.menu });
  };
  const handleCloseRightMenu = () => {
    setClasName({ ...clasNameObj, menuRight: !clasNameObj.menuRight });
  }
  return (
    <main className={style.main}>
      <div
        className={
          clasNameObj.open ? style.main_rightBlock : style.main_rightBlockClose
        }
      >
        <div className={style.main_rightBlock_head}>
          <div>
            <p className={style.one}>4</p>
            <p className={style.two}>48</p>
          </div>
          <div className={style.parent}>
            {clasNameObj.open ? (
              <ChevronLeftIcon
                sx={{ cursor: "pointer" }}
                onClick={handleClose}
              />
            ) : (
              <ChevronRightIcon
                className={style.right}
                sx={{ cursor: "pointer" }}
                onClick={handleClose}
              />
            )}
          </div>
        </div>
      </div>
      <div
        className={`${style.main_content}  ${clasNameObj.open && style.none}`}
      >
        <div
          className={
            clasNameObj.open
              ? style.main_content_top
              : style.main_content_topInClose
          }
        >
          <div className={style.main_content_top_rightBlock}>
            <div className={style.main_content_top_rightBlock_work}>
              <h3>Tasks</h3>
              <StarBorderPurple500Icon
                className={style.icon_star}
                sx={{ cursor: "pointer" }}
              />
            </div>

            <div className={style.main_content_top_rightBlock_work}>
              <GroupIcon className={style.icon_group} />
              <p>Для рабочего пространства</p>
            </div>
            <div className={style.main_content_top_rightBlock_dosk}>
              <div className={style.dosk}>
                <p>По доске</p>
                <KeyboardArrowDownIcon className={style.img} />
              </div>
            </div>
          </div>
          <div
            className={`${style.menuBlock} ${
              clasNameObj.menu && style.noneBlock
            }`}
          >
            <LinearScaleIcon
              onClick={() => handleMenu()}
              className={style.menuBlock_icon}
            />
            <div className={style.menuBlock_parent}>
              <div>
                <h3>Tasks</h3>
                <p>Для рабочего пространства</p>
                <div className={style.dosk}>
                  <p>По доске</p>
                </div>
              </div>
            </div>
          </div>

          <div className={style.main_content_top_leftBlock}>
            <div className={style.main_content_top_leftBlock_text}>
              <RocketLaunchIcon
                className={style.logo}
                sx={{ cursor: "pointer" }}
              />
              <p>Улучшения</p>
            </div>
            <div className={style.main_content_top_leftBlock_text}>
              <ElectricBoltIcon
                className={style.logo}
                sx={{ cursor: "pointer" }}
              />
              <p>Автоматизация</p>
            </div>
            <div className={style.main_content_top_leftBlock_text}>
              <FilterListIcon
                className={style.logo}
                sx={{ cursor: "pointer" }}
              />
              <p>Фильтр</p>
            </div>
            
            <div className={style.main_content_top_leftBlock_text}>
              <p>Поделиться</p>
            </div>
            <div className={style.main_content_top_leftBlock_text}>
              <span>...</span>
            </div>
          </div>
          <div
            className={`${style.menuBlockRight} ${
              clasNameObj.menuRight && style.noneBlockRight
            } `}
          >
            <ListIcon  onClick={handleCloseRightMenu} className={style.listIcon}/>
            <div>
            <div className={style.main_content_top_leftBlock_text}>
              <RocketLaunchIcon
                className={style.logo}
                sx={{ cursor: "pointer" }}
              />
              <p>Улучшения</p>
            </div>
            <div className={style.main_content_top_leftBlock_text}>
              <ElectricBoltIcon
                className={style.logo}
                sx={{ cursor: "pointer" }}
              />
              <p>Автоматизация</p>
            </div>
            <div className={style.main_content_top_leftBlock_text}>
              <FilterListIcon
                className={style.logo}
                sx={{ cursor: "pointer" }}
              />
              <p>Фильтр</p>
            </div>
            
            <div className={style.main_content_top_leftBlock_text}>
              <p>Поделиться</p>
            </div>
            <div className={style.main_content_top_leftBlock_text}>
              <span>...</span>
            </div>
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
