export default {
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Study title",
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
  ],
};
