import { toTitleCase } from './toTitleCase'

test('Given input should be formatted with initial capital letter', () => {
  const input = 'bulbasaur'
  expect(toTitleCase(input)).toBe('Bulbasaur')
})
