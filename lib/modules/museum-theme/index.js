// this module contains the character of the website.
// this module contains the theme.

module.exports = {
    construct(self, options){
        self.pushAsset('stylesheet', 'theme')
        self.pushAsset('script', 'theme')
    }
}