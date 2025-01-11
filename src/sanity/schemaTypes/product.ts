export const product = {
    name: 'product', // Use a valid identifier without spaces
    type: 'document',
    title: 'Products', // Titles can contain spaces, as they're displayed in the Studio
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Product Name', // Titles for fields can also contain spaces
      },
      {
        name: 'price',
        type: 'number',
        title: 'Product Price', // Titles for fields can also contain spaces
      },
      {
        name: 'image',
        type: 'image', // ✅ Correct type for images
        title: 'Product Image', // Titles for fields can also contain spaces
        options: {
          hotspot: true, // ✅ Enables image cropping and focal points in Sanity Studio
        },
      },
    ],
  };
  