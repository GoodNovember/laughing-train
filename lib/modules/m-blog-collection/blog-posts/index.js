const async = require("async")
const moment = require("moment")
const _ = require('lodash')

const beforeConstruct = (self, options) => {

    options.addFields = [
        {
            name:'publishedAt',
            label:"Publication Date (can be in the future)",
            type:'date',
            required:true,
        },
        {
            name:'summary',
            label:"Summary (shown as a preview)",
            type:'string',
            textarea:true
        },
        {
            name:'published',
            def:false,
            type:"boolean"
        },
        {
            name:'_person',
            withType:'person',
            type:'joinByOne',
            label:'Author',
            filters:{
                projection:{
                    title:1,
                    tags:1,
                    slug:1,
                    type:1,
                    jobTitle:1,
                    email:1,
                    phone:1,
                    shortBlurb:1,
                    thumbnail:1,
                }
            }
        },
        {
            name:'body',
            type:'area',
            label:'Body',
            contextual:true
        }
    ].concat(options.addFields || [])

    options.arrangeFields = _.merge([
        { 
            name: 'content', 
            label: 'Content', 
            fields: [
                'title', 
                'slug', 
                'publishedAt', 
                'summary', 
                'tags',
                '_person', 
                'published'
            ] 
        }
    ], options.arrangeFields || []);

    options.addColumns = [
        {
            name: 'publishedAt',
            label: 'Publication Date',
        },
        {
            name:'_person',
            label:"Author",
            partial(value){
                if(!value){
                    return '(Anonymous)'
                }else{
                    return value.title
                }
            }
        }
    ].concat(options.addColumns || []);
  
    options.addSorts = [
        {
            name: 'publishedAt',
            label: 'By Publication Date',
            sort: { startDate: -1 }
        }
    ].concat(options.addSorts || []);

    options.addFilters = [
        {
            name: 'timeSelection',
            label: "Publication Date Filter",
        }
    ].concat(options.addFilters || []);

}

const construct = (self, options) => {
    
    self.extendAutocompleteCursor = (cursor) => cursor.timeSelection('past-only')

    const superFindForEditing = self.findForEditing

    self.findForEditing = (req, criteria, projection) => superFindForEditing(req, criteria, projection).timeSelection('both')

    const superNewInstance = self.newInstance

    self.newInstance = () => {
        const instance = superNewInstance()

        const { publishedAt } = instance

        if(!publishedAt){
            instance.publishedAt = moment().format('YYYY-MM-DD') // now
        }

        return instance
    
    }

}

module.exports = {
    extend:"apostrophe-pieces",
    name:'blog-post',
    label:'Blog Post',
    pluralLabel:"Blog Posts",
    contextual:true,
    beforeConstruct,
    construct,
}