export default {
    name: "resume",
    title: "Resume",
    type: "document",
    fields: [
        {
            name: "resumeTitle",
            title: "Resume title",
            type: "string",
            description: "Used to overide document title"
        },
        {
        name: "resumeFile",
        title: "Upload File",
        type: "file"
        },
    ]
}