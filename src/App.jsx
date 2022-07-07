import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/main.scss'
import PokemonList from './pages/PokemonList'
import PokemonPage from './pages/PokemonPage'

const App = () => {
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
