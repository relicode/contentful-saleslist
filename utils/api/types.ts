import { Asset, Entry, EntryCollection } from 'contentful'
import { Document } from '@contentful/rich-text-types'

export interface ISalesItemFields {
  /** Title */
  title: string

  /** Price */
  price?: number

  /** Description */
  description?: Document

  /** Images */
  images?: Asset[]
}

export interface ISalesItem extends Entry<ISalesItemFields> {
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
export type FixedEntries = EntryCollection<ISalesItem> & { items: ISalesItem[] }

export type CONTENT_TYPE = 'salesItem'
export type LOCALE_CODE = 'en-US'
export type CONTENTFUL_DEFAULT_LOCALE_CODE = 'en-US'