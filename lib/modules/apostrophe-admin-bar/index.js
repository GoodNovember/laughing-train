const construct = (self, options) => {
    
    self.apos.adminBar.group(
        {
            label:"Content",
            items:[
                'blog-posts',
                'people',
                'events',
                'library-items'
            ]
        }
    )

    self.apos.adminBar.group(
        {
            label:'Taxonomy',
            last:true,
            items:[
                'apostrophe-tags',
                'event-types',
                'library-collections',
                'standards',
            ]
        }
    )

}

module.exports = { construct }