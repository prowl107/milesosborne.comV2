import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

export default {
  name: "documentation",
  title: "Documentation",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Document title",
      type: "string",
      description: "Used to overide document title",
    },
    {
      name: "project",
      title: "Project",
      type: "reference",
      to: [{ type: "project" }],
      description: "Link to specific project w/ case study",
    },
    {
      name: "banner",
      title: "Project Banner",
      type: "image",
      description: "Places a banner above document (optional)",
      options: {
        hotspot: true,
      },
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          marks: {
            decorators: [
              { "title": "Strong", "value": "strong" },
              { "title": "Emphasis", "value": "em" },
              { "title": "Code", "value": "code" },
              { "title": "Underline", "value": "underline" },
              { "title": "Strike", "value": "strike-through" },
              { title: "Highlight", value: "highlight" },
            ],
          },
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Numbered', value: 'number'}
          ],
        },
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
        {
          name: 'code',
          title: 'Code',
          type: 'code',
          options: {
            theme: 'solarized_dark',
          }
        },
      ],
    },
  ],
};
