var path = require('path');
const apos = require('apostrophe')

const viewsFolderFallback = path.join(__dirname, 'views')

module.exports = apos({
  root: module,
  shortName: 'negahc-apostrophe-website',

  nestedModuleSubdirs:true,

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user accounts.

  modules: {

    // Apostrophe module configuration

    // Note: most configuration occurs in the respective
    // modules' directories. See lib/apostrophe-assets/index.js for an example.
    
    // However any modules that are not present by default in Apostrophe must at
    // least have a minimal configuration here: `moduleName: {}`

    // If a template is not found somewhere else, serve it from the top-level
    // `views/` folder of the project

    'apostrophe-templates': { viewsFolderFallback },

    // Custom Widgets:

    'apostrophe-admin-bar':{},

    'museum-theme':{},
    
    'museum-one-column-widgets':{},
    'museum-two-column-widgets':{},
    'museum-three-column-widgets':{},

    'museum-navigation-widgets':{},
    'museum-navigation-link-widgets':{},
    'museum-navigation-section-widgets':{},

    'people':{},
    'people-widgets':{},
    'people-pages':{},
    
    'blog-posts':{},
    'blog-posts-widgets':{},
    'blog-posts-pages':{},

    'events':{},
    'event-types':{},
    'events-pages':{},

    'library-items':{},
    'library-collections':{},
    'library-items-pages':{},

    'standards':{},

  }
})