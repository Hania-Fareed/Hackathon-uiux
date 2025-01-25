import { Rule } from 'sanity';

export const listSchema = {
    name: 'product2',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'name',
            type:'string',
            title: 'Name',
            validation: (Rule: Rule) => Rule.required().error('Name is required'),
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'slug',
            options: {
              source : 'name'
            }
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
            options: {
              hotspot: true,
            },
            description: 'Upload an image of the product.',
        },
        {
            name: 'price',
            type: 'string',
            title: 'Price',
            validation: (Rule: Rule) => Rule.required().error('Price is required'),
        },
        {
            name: 'oldPrice',
            type: 'number',
            title: 'Old Price',
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
            validation: (Rule: Rule) =>
              Rule.max(150).warning('Keep the description under 150 characters.'),
        },
        {
            name: 'stockLevel',
            type: 'number',
            title: 'Stock Level',
            validation: (Rule: Rule) => Rule.min(0).error('Stock level must be a positive number.'),
        },
    ],
};
