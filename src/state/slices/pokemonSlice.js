import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pokemon: [],
  favorites: [],
}

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
      localStorage.setItem(payload, payload)
      state.favorites.push(payload)
    },
    removeFavorite: (state, { payload }) => {
      localStorage.removeItem(payload)
      const index = state.favorites.findIndex((x) => x === payload)
      const newFavorites = [...state.favorites]
      newFavorites.splice(index, 1)
      state.favorites = newFavorites
    },
  },
})

export const { init, loadFavorites, addFavorite, removeFavorite } = pokemonSlice.actions

export default pokemonSlice.reducer
