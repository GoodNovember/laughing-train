module.exports = {
    extend:'apostrophe-pieces-pages',
    label: 'Blog Page',

    piecesFilters: [
      { name: 'year' },
      { name: 'month' },
      { name: 'day' }
    ],
  
    construct: function(self, options) {
      var superIndexCursor = self.indexCursor
      self.indexCursor = (req) => superIndexCursor(req).timeSelection('past-only')
  }
}