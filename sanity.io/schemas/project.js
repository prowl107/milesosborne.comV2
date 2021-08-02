export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: "projectName",
            title: "Project Title",
            type: "string"
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
              source: 'projectName',
              maxLength: 200, // will be ignored if slugify is set
              slugify: input => input
                                   .toLowerCase()
                                   .replace(/\s+/g, '-')
                                   .slice(0, 200)
            }
          },
        {
            name: "thumbnail",
            title: "Thumbnail",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
           name: "description",
           title: "Project Description",
           type: "array",
           of: [
               {
                title: "Block",
                type: "block",
                styles: [{ title: "Normal", value: "normal"}],
                lists: [],
               }
           ]
        },
        {
            name: "sourceURL",
            title: "Link to GitHub/Source",
            type: "url",
        },
        {
            name: "documentationURL",
            title: "Link to external study or documentaiton",
            type: "url",
            description: "Use only if source is on another website!"
        },
        {
            name: "documentationRef",
            title: "Reference to documentation item",
            type: "reference",
            to: [{type: "documentation"}],
            description: "Use only if source is a document within Sanity"
        },
        {
            name: "featured",
            title: "Is featured?",
            type: "boolean",
        }
    ]
}