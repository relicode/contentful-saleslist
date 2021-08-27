import items from './mock-items.json'
import type { SalesItem } from 'utils/api/types'

const mockItems = JSON.parse(items).items as SalesItem[]

test('first item contains the proper ID', () => {
  expect(mockItems[0].sys.id).toBe('15912kwh3qeePsxP43pdyq')
})