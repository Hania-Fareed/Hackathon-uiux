import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from './product'
import { listSchema } from './list'
import order from './order'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema, listSchema, order],
}
