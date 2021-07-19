export default {
    name: "profile",
    title: "Profile",
    type: "document",
    fields: [
        {
            name: "picture",
            title: "Picture",
            type: "image",
            option: {
                hotspot: true,
            }
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
                }
            ]
        },
    ]
}