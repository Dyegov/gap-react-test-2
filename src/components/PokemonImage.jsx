import PropTypes from 'prop-types'

const PokemonImage = ({ src, width }) => {
  return <img className='image' src={src} width={width} />
}

PokemonImage.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.string,
}

PokemonImage.defaultProps = {
  width: '80',
}

export default PokemonImage
