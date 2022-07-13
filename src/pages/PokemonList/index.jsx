import { useState } from 'react'
import { useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
import PokemonCard from '../../components/PokemonCard'
import Filter from '../../components/Filter'
import './PokemonList.scss'
import Loading from '../../components/Loading'

const PokemonList = () => {
  const pokemonList = useSelector((state) => state.pokemon.pokemon)
  const favorites = useSelector((state) => state.pokemon.favorites)
  const favoritePokemon = pokemonList.filter((pokemon) => favorites.includes(pokemon.id))
  const [isFilterVisible, setIsFilterVisible] = useState(false)
  const [filterValue, setFilterValue] = useState('')
  const [isFavoritesVisible, setIsFavoritesVisible] = useState(false)

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible)
    window.scrollTo(0, 0)
    setFilterValue('')
  }

  if (pokemonList.length === 0) return <Loading />

  return (
    <div className='listPage'>
      <div className='menu'>
        {isFavoritesVisible ? (
          <img
            className='favorite'
            src='/favorite-active.svg'
            onClick={() => setIsFavoritesVisible(!isFavoritesVisible)}
          />
        ) : (
          <img
            className='favorite'
            src='/favorite.svg'
            onClick={() => setIsFavoritesVisible(!isFavoritesVisible)}
          />
        )}
      </div>
      <div className='title'>
        {isFilterVisible ? (
          <Filter onChange={(e) => setFilterValue(e.target.value)} />
        ) : isFavoritesVisible ? (
          <h2>Favorites</h2>
        ) : (
          <h2>Pokedex</h2>
        )}
      </div>
      {isFavoritesVisible ? (
        favoritePokemon.length === 0 ? (
          <div className='empty'>
            <div>You have no favorite Pokemon yet!</div>
            <img src='/missigno.png' />
          </div>
        ) : (
          <div className='list'>
            {favoritePokemon
              ?.filter(
                (pokemon) =>
                  pokemon.name.includes(filterValue.toLowerCase().trim()) ||
                  pokemon.id.toString().indexOf(filterValue) > -1
              )
              .map((pokemon) => (
                <PokemonCard key={pokemon.id} id={pokemon.id} />
              ))}
          </div>
        )
      ) : (
        <div className='list'>
          {pokemonList
            ?.filter(
              (pokemon) =>
                pokemon.name.includes(filterValue.toLowerCase().trim()) ||
                pokemon.id.toString().indexOf(filterValue) > -1
            )
            ?.map((pokemon) => (
              <PokemonCard key={pokemon.id} id={pokemon.id} />
            ))}
        </div>
      )}
      <div className='filter-icon'>
        <img src='/filter.png' onClick={toggleFilter} />
      </div>
    </div>
  )
}

export default PokemonList
