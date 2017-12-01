const lookup = require('./lib.js').lookup

const whay = (word, cb) => {
  if (!word) {
    cb(new Error('No word to translate.'), null)
    return
  }
  lookup(word, false, (err, results) => {
    if (err) {
      cb(err)
      return
    }
    cb(null, results)
  })
}

module.exports = {
  translate: whay
}
