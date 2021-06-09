export default {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      title: 'Project Name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'About',
      type: 'markdown',
      name: 'about'
    },
    // {
    //   title: 'Image',
    //   name: 'image',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //     storeOriginalFilename: false,
    //   },
    //   validation: Rule => Rule.required()
    // },
  ]
}