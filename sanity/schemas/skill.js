export default {
  name: 'skill',
  title: 'Skills',
  type: 'document',
  fields: [
    {
      title: 'Skill Name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Description',
      type: 'markdown',
      name: 'description'
    },
  ]
}