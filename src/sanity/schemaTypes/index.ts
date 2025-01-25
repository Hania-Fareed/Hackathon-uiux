import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from './product'
import { listSchema } from './list'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema, listSchema],
}
