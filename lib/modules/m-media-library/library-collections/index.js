module.exports = {
    extend:"apostrophe-pieces",
    name:"library-collection",
    label:"Library Collection",
    pluralLabel:"Library Collections",
    contextual:true,
    addFields:[
        {
            name:"title",
            label:"Collection Title",
            type:"string",
            required:true,
        },
        {
            name:'tags',
            type:'tags'
        },
        {
            name:"description",
            label:"Description",
            type:"area",
            options:{
                widgets:{
                    "apostrophe-rich-text":{
                        toolbar:['Bold', 'Italic', 'Link', 'Unlink']
                    },
                    "apostrophe-images":{}
                }
            }
        },
    ],
}