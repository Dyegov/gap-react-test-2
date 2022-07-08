import PropTypes from 'prop-types'
import { toTitleCase } from '../utils/toTitleCase'

const TypesList = ({ types }) => {
  return (
    <div className='types'>
      {types.map((entry) => (
        <li key={entry.slot}>{toTitleCase(entry.type.name)}</li>
      ))}
    </div>
  )
}

TypesList.propTypes = {
  types: PropTypes.array.isRequired,
}

export default TypesList
