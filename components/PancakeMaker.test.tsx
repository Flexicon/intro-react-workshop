import { expect, test } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import PancakeMaker from './PancakeMaker'

const pancake = '🥞'

test('PancakeMaker', async () => {
  render(<PancakeMaker />)

  const makeBtn = screen.getByText('Make Pancake')
  const eatBtn = screen.getByText('Eat Pancake')
  const pancakes = screen.getByTestId('pancakes')

  expect(pancakes.textContent).toBe(pancake.repeat(3))

  fireEvent.click(makeBtn)
  expect(pancakes.textContent).toBe(pancake.repeat(4))

  fireEvent.click(eatBtn)
  fireEvent.click(eatBtn)
  expect(pancakes.textContent).toBe(pancake.repeat(2))

  fireEvent.click(eatBtn)
  fireEvent.click(eatBtn)
  expect(pancakes.textContent).toContain('...no more pancakes')

  fireEvent.click(eatBtn)
  fireEvent.click(eatBtn)
  expect(pancakes.textContent).toContain('...no more pancakes')

  fireEvent.click(makeBtn)
  expect(pancakes.textContent).toBe(pancake.repeat(1))
})
