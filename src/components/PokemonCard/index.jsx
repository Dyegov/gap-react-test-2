import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { toTitleCase } from '../../utils/toTitleCase'
import './PokemonCard.scss'

const PokemonCard = ({ pokemon }) => {
  return (
    <Link to={`/${pokemon.id}`}>
      <div className={`card ${pokemon.types[0].type.name}`}>
        <div className='header'>
          <div className='name'>{toTitleCase(pokemon.name)}</div>
          <div className='number'>
            {pokemon.id.toString().length === 1
              ? `#00${pokemon.id}`
              : pokemon.id.toString().length === 2
              ? `#0${pokemon.id}`
              : `#${pokemon.id}`}
          </div>
        </div>
        <div className='body'>
          <div className='types'>
            {pokemon.types.map((entry) => (
              <li key={entry.slot}>{toTitleCase(entry.type.name)}</li>
            ))}
          </div>
          <div className='image'>
            <img src={pokemon?.sprites?.other['official-artwork']['front_default']} width='80' />
          </div>
        </div>
      </div>
    </Link>
  )
}

PokemonCard.propTypes = {
  pokemon: PropTypes.array.isRequired,
}

export default PokemonCard
