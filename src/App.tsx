import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setCountries, setTodos } from './actionTypes/actionTypes';
import style from './app.module.scss'
import { Country } from './ts';
function App() {
  const { countries }: any = useSelector(state => state)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCountries())
    dispatch(setTodos())
  }, [])
  const randomClick = () =>[
    dispatch(setCountries())
    
  ]
  return (
    <div className={style.app}>
      <h1>Random Coutries</h1>
      {countries.data.length && countries.data.map((countri: Country, i: number) => {
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
