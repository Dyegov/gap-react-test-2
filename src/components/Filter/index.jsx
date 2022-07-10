import PropTypes from 'prop-types'
import './Filter.scss'

const Filter = ({ onChange }) => {
  return (
    <div className='filter'>
      <h2>What Pokemon are you looking for?</h2>
      <div>
        <input type='text' placeholder='Search Pokemon by name or id...' onChange={onChange} />
      </div>
    </div>
  )
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
}

export default Filter
