import { useEffect } from 'react';
import { setCountries, setTodos } from './actionTypes/actionTypes';
import style from './app.module.scss'
import { useAppDispatch, useAppSelector } from './hooks/hook';
function App() {
  const { data,todos } = useAppSelector(state => state.countries)
  const dispatch = useAppDispatch()
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
      {data.length && data.map((countri, i: number) => {
        return (
          <div className={style.block} key={i}>
            <span>{countri.name.common}</span>
            <img src={countri.flags.png} alt={countri.flags.alt} />
          </div>
        )
      })}
      <button onClick={randomClick}>random Countri</button>
      {todos.length && todos.map((todos,i:number)=>{
        return(
          <div key={todos.id}>
              <span>{todos.title}</span>
              <span>{todos.userId}</span>
          </div>
        )
      })}
    </div>
  );
}

export default App;
