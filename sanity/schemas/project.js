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
      title: 'Summary',
      name: 'summary',
      type: 'string',
      description: 'one-line summary of project'
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name'
      },
      validation: Rule => Rule.required()
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
        storeOriginalFilename: false,
      },
      validation: Rule => Rule.required()
    },
    {
      title: 'About',
      type: 'markdown',
      name: 'about'
    },
    {
      title: 'Date Deployed',
      type: 'date',
      name: 'date'
    },
    {
      title: 'Deploy URL',
      type: 'url',
      name: 'deploy',
      validation: Rule => Rule.required()
    },
    {
      title: 'Repository',
      type: 'url',
      name: 'repo',
    },
    {
      title: 'Skills',
      name: 'skills',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'skill' }] }],
    },
  ],
  orderings: [
    {
      title: 'Date',
      name: 'date_desc',
      by: [
        {field: 'date', direction: 'asc'},
      ]
    },
  ]
}