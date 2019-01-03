module.exports = {
    extend:'apostrophe-pieces',
    name:'standard',
    label:"Educational Standard",
    pluralLabel:"Educational Standards",
    contextual:true,
    addFields:[
        {
            name:'published',
            type:'boolean',
            def:true,
        },
        {
            name:'standardCode',
            label:'Standard Code',
            contextual:true,
            type:'string',
        },
        {
            name:'title',
            label:"Standard Title",
            type:'string',
            required:true
        },
        {
            name:'subject',
            def:'SS',
            type:'select',
            label:"Subject",
            required:true,
            choices:[
                {
                    label:'(SS) Social Studies',
                    value:'SS',
                    showFields:['SS_domain'],
                }
            ]
        },
        {
            name:'grade',
            label:"Grade Level",
            type:'select',
            required:true,
            choices:[
                {
                    label:"Kindergarden",
                    value:'K',
                },
                {
                    label:"1st Grade",
                    value:'1',
                },
                {
                    label:'2nd Grade',
                    value:'2',
                },
                {
                    label:'3rd Grade',
                    value:'3',
                },
                {
                    label:'4th Grade',
                    value:'4',
                },
                {
                    label:'5th Grade',
                    value:'5',
                },
                {
                    label:'6th Grade',
                    value:'6',
                },
                {
                    label:'7th Grade',
                    value:'7',
                },
                {
                    label:'8th Grade',
                    value:'8',
                },
                {
                    label:'9th Grade',
                    value:'9',
                },
                {
                    label:'10th Grade',
                    value:'10',
                },
                {
                    label:'11th Grade',
                    value:'11',
                },
                {
                    label:'12th Grade',
                    value:'12',
                },
            ]
        },
        {
            name:'SS_domain',
            label:'Subsection',
            type:'select',
            required:true,
            def:null,
            choices:[
                {
                    label:'(H) Historical Understandings',
                    value:'H',
                },
                {
                    label:'(G) Geographic Understandings',
                    value:'G',
                },
                {
                    label:'(CG) Government/Civic Understandings',
                    value:'CG',
                },
                {
                    label:'(E) Economic Understandings',
                    value:'E',
                }
            ]
        },
        {
            name:'subsectionId',
            label:"Subsection Number",
            type:'integer',
            required: true,
        },
        {
            name:'articleArray',
            type:'array',
            titleField:'articleName',
            schema:[
                {
                    name:'articleName',
                    type:'string',
                    textarea:true,
                }
            ]
        }
    ],
    construct(self, options){

        options.addColumns = [
            {
                name:'standardCode',
                label:"Code"
            },
            {
                name:'title',
                label:"Title"
            },
            {
                name:'updatedAt',
                label:"Last Updated",
                partial(value){
                    if(!value){
                        return ''
                    }else{
                        return self.partial('manageUpdatedAt.html', { value })
                    }
                }
            }
        ]

        options.addSorts = [
            {
                name:'standardCode',
                label:"By Code",
                sort: { standardCode:1 }
            },
            {
                name: 'title',
                label: 'By Title (A-Z)',
                sort: { title: 1 }
            },
        ]

        self.beforeSave = ( req, piece, options, callback ) => {
            
            const { subject, grade, subsectionId } = piece

            if(piece[`${subject}_domain`]){
                const domain = piece[`${subject}_domain`]
                piece.standardCode = `${subject}${grade}${domain}${subsectionId}`
            }else{
                console.error("GSE domain field name does not exist:", `${subject}_domain`)
            }

            return callback()
        }
    }
}