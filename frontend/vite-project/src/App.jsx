import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [ favs, setFavs ] = useState(null)

  useEffect(() => {
    fetch(`${import.meta.env.VITE_DB}/movies`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setFavs(data)
    })
  },[])


  if(!favs){
    return(<h1>Loading...</h1>)
  } else {
    return (
      <>
        {console.log(favs)}
        {
          favs.map(film => <div>
            <p>{film.id}</p>
            <p>{film.title}</p>
            <p>{film.main_character}</p>
            <p>{film.release_date}</p>
          </div>)
        }
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    )
  }
}

export default App
