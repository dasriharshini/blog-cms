import { Rule } from "sanity";

export const post ={
    name:"post",
    title:"Post",
    type:"document",

    fields:[
        {
            name:"title",
            title:"Title",
            type:"string",
            validation: (Rule: Rule) => Rule.required().error("Required field")
        },
        {
            name:"slug",
            title:"Slug",
            type:"slug",
            options:{source:"title"},
            validation: (Rule: Rule) => Rule.required().error("Required field")
        },
        {
            name:"publishedat",
            title:"Published At",
            type:"datetime",
            initialValue: () => new Date().toISOString()

        },
        {
            name:"excerpt",
            title:"Excerpt",
            type:"text",
            validation: (Rule: Rule) => Rule.max(250).error("Max number of characters exceeded")
        },
        {
            name:"body",
            title:"Body",
            type:"array",
            of:[
                {
                    type:"block"
                },
                {
                    type:"image",
                    fields:[{name:"alt", title:"Alt",type:"text"}]
                }
            ]
        },
        {
            name:"tags",
            title:"Tags",
            type:"array",
            of:[{type:"reference",to:[{type:"tag"}]}]
        }

    ]
}

