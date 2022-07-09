import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PokemonImage from '../../components/PokemonImage'
import TypesList from '../../components/TypesList'
import PokemonId from '../../components/PokemonId'
import { toTitleCase } from '../../utils/toTitleCase'
import './PokemonPage.scss'

const PokemonPage = () => {
  const { id } = useParams()
  const pokemonList = useSelector((state) => state.pokemon.pokemon)
  const pokemon = pokemonList.find((entry) => entry.id === Number(id))
  const maxStat = pokemon.stats.map((entry) => entry.base_stat).reduce((a, b) => Math.max(a, b))

  const [currentTab, setCurrentTab] = useState('about')

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
      <table className='stats'>
        <tbody>
          {pokemon.stats.map((entry, i) => (
            <tr key={i}>
              <td>{toTitleCase(entry.stat.name)}</td>
              <td>{entry.base_stat}</td>
              <td>
                <meter
                  value={entry.base_stat}
                  min='0'
                  max={maxStat}
                  low={(maxStat * 20) / 100}
                  high={(maxStat * 50) / 100}
                  optimum={(maxStat * 80) / 100}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  } else if (currentTab === 'moves') {
    currentContent = (
      <table className='moves'>
        <thead>
          <tr>
            <th>#</th>
            <th>Move</th>
            <th>Lvl Learned</th>
          </tr>
        </thead>
        <tbody>
          {pokemon.moves
            .filter((entry) => entry.version_group_details[0].level_learned_at !== 0)
            .sort(
              (a, b) =>
                a.version_group_details[0].level_learned_at -
                b.version_group_details[0].level_learned_at
            )
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
        <img className='svg' src='/blob.svg' />
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
