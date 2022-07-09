import { useState } from 'react'
// import { useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PokemonImage from '../../components/PokemonImage'
import TypesList from '../../components/TypesList'
import PokemonId from '../../components/PokemonId'
import { toTitleCase } from '../../utils/toTitleCase'
import './PokemonPage.scss'

const PokemonPage = () => {
  // const location = useLocation()
  // const pokemon = location.state.pokemon

  const { id } = useParams()
  const pokemonList = useSelector((state) => state.pokemon.pokemon)
  const pokemon = pokemonList.find((entry) => entry.id === Number(id))

  const [currentTab, setCurrentTab] = useState('about')

  // const percent = (identifier, width) => {
  //   const elem = document?.querySelector(`.${identifier}`)
  //   // elem.style.width = width + '%'
  //   console.log(elem.value)
  // }

  let currentContent

  if (currentTab === 'about') {
    currentContent = (
      <table>
        <tbody>
          <tr>
            <td>Height</td>
            <td>{pokemon.height}</td>
          </tr>
          <tr>
            <td>Weight</td>
            <td>{pokemon.weight}</td>
          </tr>
          <tr>
            <td>Abilties</td>
            <td>
              {pokemon?.abilities?.map((entry) => toTitleCase(entry.ability.name)).join(', ')}
            </td>
          </tr>
        </tbody>
      </table>
    )
  } else if (currentTab === 'stats') {
    currentContent = (
      <table>
        <tbody>
          {pokemon.stats.map((entry, i) => (
            <tr key={i}>
              <td>{toTitleCase(entry.stat.name)}</td>
              <td>{entry.base_stat}</td>
              <td className='totalBar'>
                <div className='myBar' style={{ width: `${entry.base_stat}%` }}></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  } else {
    currentContent = (
      <table>
        <tbody>
          {pokemon.moves
            .filter((entry) => entry.version_group_details[0].level_learned_at !== 0)
            .map((entry, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{toTitleCase(entry.move.name)}</td>
                <td>{entry.version_group_details[0].level_learned_at}</td>
              </tr>
            ))}
        </tbody>
      </table>
    )
  }

  return (
    <div className={`page ${pokemon.types[0].type.name}`}>
      <div className='header'>
        <div className='name-types'>
          <div className='name'>{toTitleCase(pokemon.name)}</div>
          <TypesList types={pokemon.types} />
        </div>
        <PokemonId id={pokemon.id} />
        <img className='svg' src='blob.svg' />
      </div>
      <PokemonImage
        src={pokemon?.sprites?.other['official-artwork']['front_default']}
        width='250'
      />
      <div className='info'>
        <div className='navbar'>
          <button
            className={currentTab === 'about' ? 'active' : ''}
            onClick={() => setCurrentTab('about')}
          >
            About
          </button>
          <button
            className={currentTab === 'stats' ? 'active' : ''}
            onClick={() => setCurrentTab('stats')}
          >
            Base Stats
          </button>
          <button
            className={currentTab === 'moves' ? 'active' : ''}
            onClick={() => setCurrentTab('moves')}
          >
            Moves
          </button>
        </div>
        <div className='details'>{currentContent}</div>
      </div>
    </div>
  )
}

export default PokemonPage
