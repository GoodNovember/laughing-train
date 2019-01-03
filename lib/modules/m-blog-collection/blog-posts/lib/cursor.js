const _ = require('lodash');
const moment = require('moment');

const construct = (self, options) => {

    self.addFilter('timeSelection',{
        def:'past-only',
        safeFor:'public',
        choices(callback){
            callback(null, ['future-only', 'past-only'])
        },
        finalize(){

            const timeSelection = self.get('timeSelection')
            const now = moment().format('YYYY-MM-DD')

            switch(timeSelection){
                case 'future-only':{
                    self.and({ publishedAt:{ $gte:now } })
                    break;
                }
                case 'past-only':{
                    self.and({ publishedAt:{ $lte:now } })
                    break;
                }
                default:
                case 'both':{
                    return
                    break;
                }
            }

        },
        launder(s){
            return self.apos.launder.string(s)
        }
    })

    self.addFilter('year', {
        def:null,
        safeFor:'public',
        finalize(){
            const year = self.get('year')
            if(year !== null){
                self.and({
                    publishedAt:{ $regex:`^${year}`}
                })
            }
        },
        launder(s){
            
            const value = self.apos.launder.string(s);

            if (!value.match(/^\d\d\d\d$/)) {
              return '';
            }
    
            return value;

        },
        choices(callback){
            self.toDistinct('publishedAt')
                .then((results)=>{
                    
                    const distinctYears = _.uniq(_.each(results, (value, key) => {
                        results[key] = value.substr(0,4)
                    })).sort()

                    callback(null, distinctYears)

                })
                .catch((error)=>{
                    callback(error)
                })
        }
    })

    self.addFilter('month', {
        def:null,
        safeFor:'public',
        finalize(){
            const month = self.get('month')
            if(month !== null){
                self.and({
                    publishedAt:{ $regex:`^${month}` }
                })
            }
        },
        launder(s){

            const value = s.apos.launder.string(s)

            if(!value.match(/^\d\d\d\d\-\d\d$/)){
                return ''
            }

            return value

        },
        choices(callback){
            self.toDistinct('publishedAt')
            .then((results)=>{
                const distinctMonths = _.uniq(_.each(results, (value, key) => { results[key] = value.substr(0,7) })).sort()
                callback(null, distinctMonths)
            })
            .catch((error)=>{
                callback(error)
            })
        }
    })

    self.addFilter('day', {
        def: null,
        safeFor: 'public',
        finalize() {

            const day = self.get('day')
  
            if (day !== null) {
                self.and({
                    publishedAt: day
                })
            }
  
        },
        launder(s) {
            return self.apos.launder.string(s);
        },
        choices(callback) {
            self.toDistinct('publishedAt')
            .then((results)=>{
                callback(null, results)
            })
            .catch((error)=>{
                callback(error)
            })
        }
    })

}

module.exports = { construct }