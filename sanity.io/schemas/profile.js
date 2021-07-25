export default {
    name: "profile",
    title: "Profile",
    type: "document",
    fields: [
        {
            name: "profileTag",
            title: "Profile Tag",
            type: "string",
        },
        {
            name: "picture",
            title: "Picture",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "bio",
            title: "Bio",
            type: "array",
            of: [
                {
                    title: "Block",
                    type: "block",
                    styles: [{ title: "Normal", value: "normal"}],
                    lists: [],
                },
            ]
        },
    ]
}