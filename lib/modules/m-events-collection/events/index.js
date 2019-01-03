module.exports = {
    extend:'apostrophe-pieces',
    name:'event',
    label:"Event",
    pluralLabel:"Events",
    contextual:true,
    addFields:[
        {
            name:'title',
            label:"Event Title",
            type:'string',
            required:true
        },
        {
            name:'_event-type',
            label:"Event Type",
            type:"joinByOne",
            withType:'event-type',
            filters: {
                projection: {
                    title: 1,
                    slug: 1,
                    type: 1,
                    tags: 1
                }
            }
        },
        {
            name:'startDate',
            label:"Start Date",
            type:'date',
        },
        {
            name:'startTime',
            label:"Start Time",
            type:'time'
        },
        {
            name:'endDate',
            label:"End Date",
            type:'date'
        },
        {
            name:'endTime',
            label:"End Time",
            type:'time'
        }
    ]
}