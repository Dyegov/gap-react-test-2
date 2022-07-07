import { useState, useEffect } from 'react'
import axios from 'axios'
import PokemonCard from '../../components/PokemonCard'
import './PokemonList.scss'

const PokemonList = () => {
  // All of this needs to be moved to global state with redux
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    const wrapper = async () => {
      const allPokemon = []
      for (let i = 1; i < 151; i++) {
        const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        allPokemon.push(pokemon.data)
      }
      setPokemonList(allPokemon)
    }
    wrapper()
  }, [])

  if (pokemonList.length === 0) return <div>Loading...</div>

  return (
    <div className='list'>
      {pokemonList?.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  )
}

export default PokemonList
