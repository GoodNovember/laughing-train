module.exports = {
    extend:'apostrophe-widgets',
    label:'Navigation Link',
    addFields:[
        {
            name:"linkType",
            label:"Link Type",
            type:"select",
            def:"local",
            required: true,
            choices:[
                {
                    label:"Local Page (this website)",
                    value:"local",
                    showFields:[
                        "_linkPage",
                    ]
                },
                {
                    label:"External Link (eg. www.google.com)",
                    value:"external",
                    showFields:[
                        "linkHref",
                    ]
                }
            ]
        },
        {
            name: '_linkPage',
            type: 'joinByOne',
            withType: 'apostrophe-page',
            label: 'Page',
            idField: 'pageId',
            filters:{
                projection:{
                    title:1,
                    _url:1,
                }
            }
        },
        {
            name:"linkHref",
            type:"url",
            label:"External URL"
        },
        {
            name:"linkLabel",
            type:"string",
            label:"Label (optional)",
        },
        {
            name:"linkOpenMode",
            type:"select",
            def:"sameTab",
            choices:[
                {
                    label:"Open in a New Tab",
                    value:"newTab",
                },
                {
                    label:"Open in the Same Tab",
                    value:"sameTab"
                }
            ]
        },
        {
            name:"linkDisplayMode",
            label:"Display As:",
            type:"select",
            required:true,
            def:"button",
            choices:[
                {
                    label:"Text Link",
                    value:"text-link"
                },
                {
                    label:"Button",
                    value:"button"
                }
            ]
        }
    ]
}