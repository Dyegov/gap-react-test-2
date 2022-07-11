import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { init, loadFavorites } from './state/slices/pokemonSlice'
import './styles/main.scss'
import PokemonList from './pages/PokemonList'
import PokemonPage from './pages/PokemonPage'

const App = () => {
  const dispatch = useDispatch()
  const { REACT_APP_DB } = process.env

  useEffect(() => {
    const fetchPokemon = async () => {
      const allPokemon = []
      for (let i = 1; i < 151; i++) {
        const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        allPokemon.push(pokemon.data)
      }
      dispatch(init(allPokemon))
      const favResult = await axios.get(`${REACT_APP_DB}/favorites.json`)
      const favorites = Object.values(favResult.data)
      dispatch(loadFavorites(favorites))
    }
    fetchPokemon()
  }, [dispatch])

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<PokemonList />} />
        <Route path='/:id' element={<PokemonPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
