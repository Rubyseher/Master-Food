export default {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name of dish',
      type: 'string',
      validation:(Rule) =>Rule.required(),
    },
    {
      name: 'short_description',
      title: 'short description',
      type: 'string',
      validation:(Rule) =>Rule.max(200),
    },
    {
      name: 'price',
      title: 'Price of dish',
      type: 'number',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image',
      title: 'Image of dish',
      type: 'image',
    },
  ]
}
