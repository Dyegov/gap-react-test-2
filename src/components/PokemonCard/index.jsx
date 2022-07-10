import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { toTitleCase } from '../../utils/toTitleCase'
import PokemonImage from '../../components/PokemonImage'
import TypesList from '../TypesList'
import PokemonId from '../PokemonId'
import './PokemonCard.scss'

const PokemonCard = ({ id }) => {
  const pokemonList = useSelector((state) => state.pokemon.pokemon)
  const pokemon = pokemonList.find((entry) => entry.id === id)

  return (
    <Link to={`/${pokemon.id}`} state={{ pokemon }}>
      <div className={`card ${pokemon.types[0].type.name}`}>
        <div className='header'>
          <div className='name'>
            {toTitleCase(pokemon.name.length > 9 ? `${pokemon.name.slice(0, 6)}...` : pokemon.name)}
          </div>
          <PokemonId id={pokemon.id} />
        </div>
        <div className='body'>
          <TypesList types={pokemon.types} />
          <PokemonImage src={pokemon?.sprites?.other['official-artwork']['front_default']} />
        </div>
      </div>
    </Link>
  )
}

PokemonCard.propTypes = {
  id: PropTypes.number.isRequired,
}

export default PokemonCard
