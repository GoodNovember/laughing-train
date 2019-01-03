// This configures the apostrophe-pages module to add a "home" page type to the
// pages menu

module.exports = {
  types: [
    {
      name: 'home',
      label: 'Home'
    },
    {
      name: "default",
      label: "Default"
    },
    {
      name: 'information-page',
      label: 'Informational Page'
    },
    {
      name: 'shop-item-page',
      label: 'Shop Items'
    },
    {
      name: 'people-page',
      label: "People Index"
    },
    {
      name: 'blog-posts-page',
      label: "Blog Index"
    },
    {
      name: 'library-items-page',
      label: "Library Index"
    },
    {
      name: 'events-page',
      label: "Event Index"
    }

    // Add more page types here, but make sure you create a corresponding
    // template in lib/modules/apostrophe-pages/views/pages!
  ]
};
