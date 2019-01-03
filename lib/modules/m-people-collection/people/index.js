module.exports = {
    extend:"apostrophe-pieces",
    name:"person",
    label:"Person",
    pluralLabel:"People",
    contextual:true,
    addFields:[
        {
            name:"title",
            label:"Full Name",
            type:"string",
            required:true,
            contextual:true,
        },
        {
            name:'jobTitle',
            label:"Job Title",
            type:'string'
        },
        {
            name:"firstName",
            label:"First Name",
            type:"string",
            required:true,
        },
        {
            name:"lastName",
            label:"Last Name",
            type:"string",
            required:true,
        },
        {
            name:'shortBlurb',
            label:'Short Blurb (a sentence or two)',
            type:'string',
            textarea:true,
        },
        {
            name:"body",
            label:"Biography",
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
        {
            name:'phone',
            label:'Phone',
            type:'string'
        },
        {
            name:'email',
            label:'Email',
            type:'string',
        },
        {
            name:'thumbnail',
            label:'Thumbnail',
            type:'singleton',
            widgetType:'apostrophe-images',
            options:{
                limit:1,
                minSize:[200, 200],
                aspectRatio: [1,1]
            }
        }
    ],
    arrangeFields:[
        {
            name:"info",
            label:"Information",
            fields:['firstName', 'lastName', 'jobTitle', 'email', 'phone']
        },
        {
            name:'meta',
            label:'Meta',
            fields:['slug', 'published', 'tags']
        },
        {
            name:'content',
            label:"Content",
            fields:['thumbnail', 'body']
        }
    ],
    construct(self, options){
        self.beforeSave = (req, piece, options, callback)=>{

            const { firstName, lastName } = piece

            piece.title = (`${firstName} ${lastName}`).trim()

            return callback()
        }
    }
}