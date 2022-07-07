import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const PokemonPage = () => {
  const { id } = useParams()

  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    const wrapper = async () => {
      const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      setPokemon(result.data)
    }
    wrapper()
  }, [])

  console.log(pokemon)

  return (
    <div>
      <div>Pokemon {id}</div>
      <div>Types</div>
      {pokemon?.types?.map((entry) => (
        <li key={entry.slot}>{entry.type.name}</li>
      ))}
    </div>
  )
}

export default PokemonPage
