import { type SchemaTypeDefinition } from 'sanity'
import { venueType } from './venueType'
import { artistType } from './artistType'
import { heroCarouselType } from './hero-carousel'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroCarouselType, venueType, artistType],
}
