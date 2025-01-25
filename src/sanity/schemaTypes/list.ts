export const listSchema = {
    name: 'product2',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'name',
            type:'string',
            title: 'Name',
            validation: (Rule: any) => Rule.required().error('Name is required'),
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
            asset: {
              "_ref": "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg"
            },
            options: {
              hotspot: true,
            },
            description: 'Upload an image of the product.',
          },
          {
            name: 'price',
            type: 'string',
            title: 'Price',
            validation: (Rule: any) => Rule.required().error('Price is required'),
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
            validation: (Rule: any) =>
              Rule.max(150).warning('Keep the description under 150 characters.'),
          },
          {
            name: 'stockLevel',
            type: 'number',
            title: 'Stock Level',
            validation: (Rule: any) => Rule.min(0).error('Stock level must be a positive number.'),
          },
    ],
};