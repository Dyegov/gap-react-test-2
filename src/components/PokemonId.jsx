import PropTypes from 'prop-types'

const PokemonId = ({ id }) => {
  return (
    <div className='number'>
      {id.toString().length === 1 ? `#00${id}` : id.toString().length === 2 ? `#0${id}` : `#${id}`}
    </div>
  )
}

PokemonId.propTypes = {
  id: PropTypes.number.isRequired,
}

export default PokemonId
