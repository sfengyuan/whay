
const jsdom = require('jsdom')
const {JSDOM} = jsdom
module.exports = {
  yd: {
    url: word => 'http://dict.youdao.com/w/eng/' + word,
    extract: (htmldoc) => {
      const {document} = (new JSDOM(htmldoc)).window
      const ret = {}
      const keywordEl = document.querySelector('.keyword')
      const phoneticEl = document.querySelector('#phrsListTab .phonetic')
      const lis = document.querySelectorAll('#phrsListTab .trans-container ul li')

      if (!keywordEl) {
        ret.keyword = ''
      } else {
        ret.keyword = keywordEl.textContent
      }

      if (!phoneticEl) {
        ret.phonetic = ''
      } else {
        ret.phonetic = phoneticEl.textContent
      }

      ret.trans = []

      if (lis.length > 0) {
        Array.prototype.forEach.call(lis, (li) => {
          ret.trans.push(li.textContent)
        })
      } else {
        ret.trans.push(':( 无结果!')
      }

      return ret
    }
  }
}
