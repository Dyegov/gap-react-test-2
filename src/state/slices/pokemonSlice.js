import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pokemon: [],
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    init: (state, { payload }) => {
      state.pokemon = payload
    },
  },
})

export const { init } = pokemonSlice.actions

export default pokemonSlice.reducer
