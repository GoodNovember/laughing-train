const beforeConstruct = (self, options) => {
    const { hideLabel } = options
    
    if(hideLabel){
        options.addFields = []
    }else{
        options.addFields = [
            {
                name:"sectionLabel",
                type:"string",
                label:"Section Label (optional)"
            }
        ]
    }

    options.addFields.push(
        {
            name:"sectionLinks",
            type:"area",
            label:"Section Links",
            options:{
                widgets:{
                    "museum-navigation-link":{}
                },
                controls:{
                    position:'bottom-left'
                }
            }
        }
    )

    options.addFields.concat(options.addFields || [])

}

module.exports = {
    extend:'apostrophe-widgets',
    label:'Navigation Section',
    beforeConstruct,
    // addFields:[
    //     {
    //         name:"sectionLabel",
    //         type:"string",
    //         label:"Section Label (optional)"
    //     },
    //     {
    //         name:"sectionLinks",
    //         type:"area",
    //         label:"Section Links",
    //         options:{
    //             widgets:{
    //                 "museum-navigation-link":{}
    //             },
    //             controls:{
    //                 position:'bottom-left'
    //             }
    //         }
    //     }
    // ],
}