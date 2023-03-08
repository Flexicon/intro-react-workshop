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

  test('should make pancakes', () => {
    expect(pancakes.textContent).toBe(pancake.repeat(3))

    clickMake()
    expect(pancakes.textContent).toBe(pancake.repeat(4))

    clickMake(2)
    expect(pancakes.textContent).toBe(pancake.repeat(6))
  })

  test('should eat pancakes', () => {
    expect(pancakes.textContent).toBe(pancake.repeat(3))

    clickEat()
    expect(pancakes.textContent).toBe(pancake.repeat(2))

    clickEat(2)
    expect(pancakes.textContent).toContain('...no more pancakes')
  })

  test('should make pancakes after eating all of them', () => {
    expect(pancakes.textContent).toBe(pancake.repeat(3))

    clickEat(10)
    expect(pancakes.textContent).toContain('...no more pancakes')

    clickMake()
    expect(pancakes.textContent).toBe(pancake)
  })

  test('should only make pancakes up to limit', () => {
    expect(pancakes.textContent).toBe(pancake.repeat(3))
    expect(screen.queryByText(limitText)).toBeNull()

    clickMake(6)
    expect(pancakes.textContent).toBe(pancake.repeat(9))
    expect(screen.queryByText(limitText)).toBeNull()

    clickMake()
    expect(pancakes.textContent).toBe(pancake.repeat(10))
    expect(screen.queryByText(limitText)).not.toBeNull()

    clickMake()
    expect(pancakes.textContent).toBe(pancake.repeat(10))

    clickMake(20)
    expect(pancakes.textContent).toBe(pancake.repeat(10))
  })

  function clickMake(times: number = 1) {
    for (let i = 0; i < Math.max(1, times); i++) {
      fireEvent.click(makeBtn)
    }
  }

  function clickEat(times: number = 1) {
    for (let i = 0; i < Math.max(1, times); i++) {
      fireEvent.click(eatBtn)
    }
  }
})
