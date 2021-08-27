import { Asset, Entry, EntryCollection } from 'contentful'
import { Document } from '@contentful/rich-text-types'

export interface SalesItemFields {
  /** Title */
  title: string

  /** Price */
  price?: number

  /** Description */
  description?: Document

  /** Images */
  images: [Asset] & Asset[]
}

export interface SalesItem extends Entry<SalesItemFields> {
  sys: {
    id: string
    type: string
    createdAt: string
    updatedAt: string
    locale: string
    contentType: {
      sys: {
        id: 'salesItem'
        linkType: 'ContentType'
        type: 'Link'
      }
    }
  }
}

// To cirucmvent typing bugs
export type FixedEntries = EntryCollection<SalesItem> & { items: SalesItem[] }

export type CONTENT_TYPE = 'salesItem'
export type LOCALE_CODE = 'en-US'
export type CONTENTFUL_DEFAULT_LOCALE_CODE = 'en-US'