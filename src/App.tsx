import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setCountries } from './actionTypes/actionTypes';
import style from './app.module.scss'
function App() {
  const { countries }: any = useSelector(state => state)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCountries())
  }, [])
  const randomClick = () =>[
    dispatch(setCountries())
  ]
  return (
    <div className={style.app}>
      <h1>Random Coutries</h1>
      {countries.data.length && countries.data.map((countri: any, i: any) => {
        return (
          <div className={style.block} key={i}>
            <span>{countri.name.common}</span>
            <img src={countri.flags.png} alt={countri.flags.alt} />
          </div>
        )
      })}
      <button onClick={randomClick}>random Countri</button>
    </div>
  );
}

export default App;
