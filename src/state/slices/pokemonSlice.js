import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  pokemon: [],
  favorites: [],
}

const { REACT_APP_DB } = process.env

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    init: (state, { payload }) => {
      state.pokemon = payload
    },
    loadFavorites: (state, { payload }) => {
      state.favorites = payload
    },
    addFavorite: (state, { payload }) => {
      state.favorites.push(payload)
      const wrapper = async () => {
        await axios.put(`${REACT_APP_DB}/favorites/${payload}.json`, payload)
      }
      wrapper()
    },
    removeFavorite: (state, { payload }) => {
      const newFavorites = [...state.favorites]
      newFavorites.splice(state.favorites.indexOf(payload), 1)
      state.favorites = newFavorites
      const wrapper = async () => {
        await axios.delete(`${REACT_APP_DB}/favorites/${payload}.json`, payload)
      }
      wrapper()
    },
  },
})

export const { init, loadFavorites, addFavorite, removeFavorite } = pokemonSlice.actions

export default pokemonSlice.reducer
