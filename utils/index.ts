export const generateUniqueKey = (() => {
  let counter = 0
  return () => {
    counter += 1
    return String(counter)
  }
})()

export const generatePrice = (price?: string | number) => price ? String(price) + '€' : ''