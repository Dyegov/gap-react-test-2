import PropTypes from 'prop-types'

const Back = ({ onClick }) => {
  return <img className='back' src='/back.svg' onClick={onClick} />
}

Back.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Back
