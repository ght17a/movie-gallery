import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  return (
    <>
      <MovieCard movie={{title: "Hubz's film", release_date: "2024"}}/>
      <MovieCard movie={{title: "Die's film", release_date: "2023"}}/>
    </>
  )
}

export default App
