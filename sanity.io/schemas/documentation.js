export default {
  name: "documentation",
  title: "Documentation",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Document title",
      type: "string",
      description: "Used to overide document title"
    },
    {
      name: "project",
      title: "Project",
      type: "reference",
      to: [{ type: "project" }],
      description: "Link to specific project w/ case study"
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          lists: [],
        },
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
     name: "slug",
     title: "Slug",
     type: "slug",
     options: {
      source: 'title',
      maxLength: 200, // will be ignored if slugify is set
      slugify: input => input
                           .toLowerCase()
                           .replace(/\s+/g, '-')
                           .slice(0, 200)
    }
    }
  ],
};