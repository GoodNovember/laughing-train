module.exports = {
    extend:"apostrophe-pieces",
    name:"library-item",
    label:"Library Item",
    pluralLabel:"Library Items",
    contextual:true,
    addFields:[
        {
            name:"title",
            label:"Title",
            type:"string",
            required:true,
        },
        {
            name:'_library-collection',
            type:'joinByOne',
            withType:'library-collection',
            required:true,
            filters: {
                projection: {
                    title: 1,
                    slug: 1,
                    type: 1,
                    tags: 1,
                    description:1,
                }
            }
        },
        {
            name:'media',
            type:'area',
            contextual:true
        },
        {
            name:"description",
            type:"area",
            contextual:true,
        },
    ]
}