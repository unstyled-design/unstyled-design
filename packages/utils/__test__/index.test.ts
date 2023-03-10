import { expect, it } from 'vitest'
import { addUnit } from '../index'

it('index', () => {
  expect(addUnit()).toBe('')
  expect(addUnit(10)).toBe('10px')
  expect(addUnit('10')).toBe('10px')
  expect(addUnit('10', 'rem')).toBe('10rem')
  expect(addUnit('test')).toBe(undefined)
})
