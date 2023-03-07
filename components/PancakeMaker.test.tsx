import { afterEach, beforeEach, describe, expect, test } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import PancakeMaker from './PancakeMaker'

const pancake = '🥞'
const limitText = "✋ Woah there, that's plenty pancakes there bud."

describe('PancakeMaker', () => {
  let makeBtn: HTMLElement, eatBtn: HTMLElement, pancakes: HTMLElement

  beforeEach(() => {
    render(<PancakeMaker />)
    makeBtn = screen.getByText('Make Pancake')
    eatBtn = screen.getByText('Eat Pancake')
    pancakes = screen.getByTestId('pancakes')
  })

  afterEach(() => {
    cleanup()
  })

  test('should make pancakes', async () => {
    expect(pancakes.textContent).toBe(pancake.repeat(3))

    fireEvent.click(makeBtn)
    expect(pancakes.textContent).toBe(pancake.repeat(4))

    fireEvent.click(makeBtn)
    fireEvent.click(makeBtn)
    expect(pancakes.textContent).toBe(pancake.repeat(6))
  })

  test('should eat pancakes', async () => {
    expect(pancakes.textContent).toBe(pancake.repeat(3))

    fireEvent.click(eatBtn)
    expect(pancakes.textContent).toBe(pancake.repeat(2))

    fireEvent.click(eatBtn)
    fireEvent.click(eatBtn)
    expect(pancakes.textContent).toContain('...no more pancakes')
  })

  test('should make pancakes after eating all of them', async () => {
    expect(pancakes.textContent).toBe(pancake.repeat(3))

    for (let i = 0; i < 10; i++) {
      fireEvent.click(eatBtn)
    }
    expect(pancakes.textContent).toContain('...no more pancakes')

    fireEvent.click(makeBtn)
    expect(pancakes.textContent).toBe(pancake)
  })

  test('should only make pancakes up to limit', async () => {
    expect(pancakes.textContent).toBe(pancake.repeat(3))
    expect(screen.queryByText(limitText)).toBeNull()

    for (let i = 0; i < 7; i++) {
      fireEvent.click(makeBtn)
    }
    expect(pancakes.textContent).toBe(pancake.repeat(10))
    expect(screen.queryByText(limitText)).not.toBeNull()

    fireEvent.click(makeBtn)
    expect(pancakes.textContent).toBe(pancake.repeat(10))

    for (let i = 0; i < 20; i++) {
      fireEvent.click(makeBtn)
    }
    expect(pancakes.textContent).toBe(pancake.repeat(10))
  })
})
