import items from './mock-items.json'
import { SalesItems } from 'utils/api'

const mockItems = JSON.parse(items).items as SalesItems

test('first item contains the proper ID', () => {
  // console.log(mockItems)
  expect(mockItems[0].sys.id).toBe('15912kwh3qeePsxP43pdyq')
})