module.exports = {
    extend:'apostrophe-widgets',
    label:'Museum Website Navigation',
    contextualOnly:true,
    addFields:[
        {
            type:"area",
            name:"sectionContentArea",
            options:{
                widgets:{
                    "museum-navigation-section":{}
                }
            }
        },
        {
            type:"area",
            name:"linkContentArea",
            options:{
                widgets:{
                    "museum-navigation-link":{}
                }
            }
        },
    ]
}