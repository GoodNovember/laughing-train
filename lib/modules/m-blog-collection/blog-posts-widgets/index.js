module.exports = {
    extend: "apostrophe-pieces-widgets",
    filters:{
        projection:{
            publishedAt:1,
            slug:1,
            title:1,
            type:1,
            tags:1,
            body:1,
        }
    },
    construct(self, options){
        const superWidgetCursor = self.widgetCursor
        self.widgetCursor = (req, criteria) => superWidgetCursor(req, criteria).timeSelection('past-only')
    }
}