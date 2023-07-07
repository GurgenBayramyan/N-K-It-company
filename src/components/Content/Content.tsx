import React, { useState } from "react";
import style from "./Content.module.scss";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import FilterListIcon from "@mui/icons-material/FilterList";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
const Content = () => {
  const [state, setState] = useState<{ open: boolean }>({
    open: true
  });
  const handleMenu = () => {
    setState({ ...state, open: !state.open });
  };
  return (
    <div className={style.content}>
      <div className={`${style.leftContainer} ${state.open && style.close} `}>
        <div className={style.leftContainer_top}>
          <div className={style.numbers}>
            <div className={style.first}>
              <span>4</span>
            </div>
            <div className={style.last}>
              <span>48</span>
            </div>
          </div>
          {state.open
            ? <div className={style.openBlock}>
                <ChevronRightIcon
                  sx={{ cursor: "pointer" }}
                  onClick={handleMenu}
                />
              </div>
            : <div className={style.closeblock}>
                <ChevronLeftIcon
                  sx={{ cursor: "pointer" }}
                  onClick={handleMenu}
                />
              </div>}
          <div />
        </div>
        <div className={style.leftContainer_down} />
      </div>
      <div className={style.rightContainer}>
        <div className={style.topSec}>
          <div className={style.leftBlock}>
            <h3>Tasks</h3>
            <StarBorderIcon className={style.starIcon} />
            <div className={style.textBlock}>
              <PeopleAltIcon />
              <span>Workspace visible</span>
            </div>
            <div className={style.board}>
              <span>Board</span>
              <div className={style.rowDown}>
                <KeyboardArrowDownIcon />
              </div>
            </div>
          </div>

          <div className={style.rightBlock}>
            <div className={style.text}>
              <RocketLaunchIcon
                className={style.logo}
                sx={{ cursor: "pointer" }}
              />
              <p>Улучшения</p>
            </div>
            <div className={style.text}>
              <ElectricBoltIcon
                className={style.logo}
                sx={{ cursor: "pointer" }}
              />
              <p>Автоматизация</p>
            </div>
            <div className={style.text}>
              <FilterListIcon
                className={style.logo}
                sx={{ cursor: "pointer" }}
              />
              <p>Фильтр</p>
            </div>
            <div className={style.text}>
              <p>Поделиться</p>
            </div>
            <div className={style.text}>
              <span>...</span>
            </div>
          </div>
        </div>
        <div className={style.rightContainer_down} />
      </div>
    </div>
  );
};

export default Content;
