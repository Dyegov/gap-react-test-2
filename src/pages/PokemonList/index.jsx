import { useState } from 'react'
import { useSelector } from 'react-redux'
import PokemonCard from '../../components/PokemonCard'
import Filter from '../../components/Filter'
import './PokemonList.scss'

const PokemonList = () => {
  const pokemonList = useSelector((state) => state.pokemon.pokemon)
  const [isVisible, setIsVisible] = useState(false)
  const [filterValue, setFilterValue] = useState('')

  const toggleFilter = () => {
    setIsVisible(!isVisible)
    window.scrollTo(0, 0)
    setFilterValue('')
  }

  if (pokemonList.length === 0) return <div>Loading...</div>

  return (
    <>
      <div>{isVisible && <Filter onChange={(e) => setFilterValue(e.target.value)} />}</div>
      <div className='list'>
        {pokemonList
          ?.filter((pokemon) => pokemon.name.includes(filterValue.toLowerCase().trim()))
          ?.map((pokemon) => (
            <PokemonCard key={pokemon.id} id={pokemon.id} />
          ))}
      </div>
      <div className='filter-icon'>
        <img src='/filter.png' onClick={toggleFilter} />
      </div>
    </>
  )
}

export default PokemonList
