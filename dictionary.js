
const jsdom = require('jsdom')
const {JSDOM} = jsdom
module.exports = {
  yd: {
    url: word => 'http://dict.youdao.com/w/eng/' + word,
    extract: (htmldoc) => {
      const {document} = (new JSDOM(htmldoc)).window
      const ret = {}
      ret.keyword = document.querySelector('.keyword').textContent
      ret.phonetic = document.querySelector('#phrsListTab .phonetic').textContent
      ret.trans = []
      let lis = document.querySelectorAll('#phrsListTab .trans-container ul li')
      Array.prototype.forEach.call(lis, (li) => {
        ret.trans.push(li.textContent)
      })
      return ret
    }
  }
}
