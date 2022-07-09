import { useSelector } from 'react-redux'
import PokemonCard from '../../components/PokemonCard'
import './PokemonList.scss'

const PokemonList = () => {
  const pokemonList = useSelector((state) => state.pokemon.pokemon)

  if (pokemonList.length === 0) return <div>Loading...</div>

  return (
    <div className='list'>
      {pokemonList?.map((pokemon) => (
        <PokemonCard key={pokemon.id} id={pokemon.id} />
      ))}
    </div>
  )
}

export default PokemonList
