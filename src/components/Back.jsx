import PropTypes from 'prop-types'

const Back = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <img className='back' src='/back.svg' />
    </button>
  )
}

Back.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Back
