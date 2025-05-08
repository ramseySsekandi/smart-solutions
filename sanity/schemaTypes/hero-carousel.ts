import {defineField, defineType} from 'sanity'

export const heroCarouselType = defineType({
  name: 'Hero-Carousel',
  title: 'Hero-Carousel',
  description: 'The hero carousel on the homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'Image_URL',
      type: 'url',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(25)
      }),  
    defineField({
      name: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'Button_Text',
      type: 'string',
      initialValue: "Read More",
    }),
    defineField({
      name: 'Button_URL',
      type: 'url',
      initialValue: "http://localhost:3000/services",
    })
  ],
})