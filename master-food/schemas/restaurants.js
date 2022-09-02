export default {
  name: 'restaurants',
  title: 'Restaurants',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Restaurant name',
      type: 'string',
      validation:(Rule)=> Rule.required(),
    },
    {
      name: 'short_description',
      title: 'short_description',
      type: 'string',
      validation:(Rule)=> Rule.max(200),
    },
    {
      name: 'image',
      title: 'Image of restaurant',
      type: 'image',
    },
    {
      name: 'lat',
      title: 'Latitude of restaurant',
      type: 'number',
    },
    {
      name: 'long',
      title: 'Longitude of restaurant',
      type: 'number',
    },
    {
      name: 'address',
      title: 'Restaurant Address',
      type: 'string',
      validation:(Rule)=> Rule.required(),
    },
    {
      name: 'rating',
      title: 'Enter rating from 1 to 5',
      type: 'number',
      validation:(Rule)=> Rule.required().min(1).max(5).error('Please Enter rating from 1 to 5')
    },
    {
      name: 'type',
      title: 'Category',
      type: 'reference',
      validation:(Rule)=> Rule.required(),
      to:[{type:'category'}],
    },
    {
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of:[
        {
          type:'reference',
          to:[
              {type:'dish'}
            ]
        }
      ],
    }
  ]
}
