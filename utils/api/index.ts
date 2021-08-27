import * as contentful from 'contentful'
import { getEnv } from 'utils/env'
import { FixedEntries, ISalesItem } from './types'
const {
  CONTENTFUL_DELIVERY_TOKEN,
  CONTENTFUL_SPACE,
  CONTENTFUL_ENVIRONMENT,
} = getEnv()

const client = contentful.createClient({
  accessToken: CONTENTFUL_DELIVERY_TOKEN,
  space: CONTENTFUL_SPACE,
  environment: CONTENTFUL_ENVIRONMENT,
})

export const fetchSalesItems = async () => {
  const response = await client.getEntries<ISalesItem>()
  return response as FixedEntries
}

export const fetchSalesItem = async (id: string) => {
  const response = await client.getEntry<ISalesItem>(id)
  return response
}
